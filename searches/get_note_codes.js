const perform = (z, bundle) => {
  const options = {
    url: 'https://api.workwave.com/pestpac/v1/lookups/noteCodes',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      apikey: bundle.authData.apikey,
      'tenant-id': bundle.authData.tenant_id,
      authorization: bundle.authData.access_token
    },
    params: {
      active: bundle.inputData.active
    }
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    const resultsWithId = results.map(noteCode => {
      noteCode.id = noteCode.NoteCodeID;
      delete noteCode.NoteCodeID;
      return noteCode;
    });

    z.console.log(resultsWithId);
    return resultsWithId;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'active',
        label: 'Active Notes',
        type: 'boolean',
        default: 'True',
        helpText: 'Please select active, inactive or all.',
        required: false,
        list: false,
        altersDynamicFields: false
      }
    ],
    sample: {
      NoteCodeID: 1,
      Code: 'ALERT',
      Description: 'Alert Notification',
      Active: true
    },
    outputFields: [
      { key: 'NoteCodeID', label: 'NoteCodeID', type: 'integer' },
      { key: 'Code', label: 'Note Code' },
      { key: 'Description', label: 'Description' },
      { key: 'Active', label: 'Active', type: 'boolean' },
      { key: 'Id', label: 'Id', type: 'string' }
    ]
  },
  key: 'get_note_codes',
  noun: 'Note',
  display: {
    label: 'Get Note Codes',
    description: 'Used to pull a list of current note codes.',
    hidden: false,
    important: true
  }
};
