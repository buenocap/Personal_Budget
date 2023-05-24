function findEnvelope(envelopes,reqId) {
    for (let x = 0; x < envelopes.length; x++) {
        if (envelopes[x].id == reqId)
        {
            return envelopes[x];
        }
    }
}