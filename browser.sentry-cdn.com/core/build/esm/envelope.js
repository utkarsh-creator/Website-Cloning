import {
    dsnToString,
    createEnvelope,
    dropUndefinedKeys
} from '@sentry/utils';

/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(metadata) {
    if (!metadata || !metadata.sdk) {
        return;
    }
    const {
        name,
        version
    } = metadata.sdk;
    return {
        name,
        version
    };
}

/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...(event.sdk.integrations || []), ...(sdkInfo.integrations || [])];
    event.sdk.packages = [...(event.sdk.packages || []), ...(sdkInfo.packages || [])];
    return event;
}

/** Creates an envelope from a Session */
function createSessionEnvelope(
    session,
    dsn,
    metadata,
    tunnel,
) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var envelopeHeaders = {
        sent_at: new Date().toISOString(),
        ...(sdkInfo && {
            sdk: sdkInfo
        }),
        ...(!!tunnel && {
            dsn: dsnToString(dsn)
        }),
    };

    var envelopeItem =
        'aggregates' in session ? [{
            type: 'sessions'
        }, session] : [{
            type: 'session'
        }, session];

    return createEnvelope(envelopeHeaders, [envelopeItem]);
}

/**
 * Create an Envelope from an event.
 */
function createEventEnvelope(
    event,
    dsn,
    metadata,
    tunnel,
) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var eventType = event.type || 'event';

    const {
        transactionSampling
    } = event.sdkProcessingMetadata || {};
    const {
        method: samplingMethod,
        rate: sampleRate
    } = transactionSampling || {};

    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);

    // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
    // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
    // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
    // of this `delete`, lest we miss putting it back in the next time the property is in use.)
    delete event.sdkProcessingMetadata;

    var envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);

    var eventItem = [{
            type: eventType,
            sample_rates: [{
                id: samplingMethod,
                rate: sampleRate
            }],
        },
        event,
    ];
    return createEnvelope(envelopeHeaders, [eventItem]);
}

function createEventEnvelopeHeaders(
    event,
    sdkInfo,
    tunnel,
    dsn,
) {
    var baggage = event.contexts && (event.contexts.baggage);
    const {
        environment,
        release,
        transaction,
        userid,
        usersegment
    } = baggage || {};

    return {
        event_id: event.event_id,
        sent_at: new Date().toISOString(),
        ...(sdkInfo && {
            sdk: sdkInfo
        }),
        ...(!!tunnel && {
            dsn: dsnToString(dsn)
        }),
        ...(event.type === 'transaction' &&
            // If we don't already have a trace context in the event, we can't get the trace id, which makes adding any other
            // trace data pointless
            event.contexts &&
            event.contexts.trace && {
                trace: dropUndefinedKeys({
                    // Trace context must be defined for transactions
                    trace_id: (event.contexts.trace).trace_id,
                    public_key: dsn.publicKey,
                    environment: environment,
                    release: release,
                    transaction: transaction,
                    ...((userid || usersegment) && {
                        user: {
                            id: userid,
                            segment: usersegment,
                        },
                    }),
                }),
            }),
    };
}

export {
    createEventEnvelope,
    createSessionEnvelope
};
//# sourceMappingURL=envelope.js.map