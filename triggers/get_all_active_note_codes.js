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
      active: 'True'
    }
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    return results.map(function(noteCode) {
      noteCode.id = noteCode.NoteCodeID; // copy "noteCodeId" into a new property named "id" like Zapier wants
      delete noteCode.NoteCodeID; // delete noteCodeId property from object, leaving only the new "id" (optional)
      return noteCode; // return the transformed version of this element of the array
    });
  });

  // You can do any parsing you need for results here before returning them
  //
  //return results;
  //});
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      Code: 'ALERT',
      Description: 'Alert Notification',
      Active: true,
      id: 1
    },
    outputFields: [
      { key: 'Code', label: 'Note Code' },
      { key: 'Description', label: 'Description' },
      { key: 'Active', label: 'Active', type: 'boolean' },
      { key: 'id', label: 'Note Code ID', type: 'integer' }
    ]
  },
  key: 'get_all_active_note_codes',
  noun: 'Notes',
  display: {
    label: 'Get All Active Note Codes',
    description:
      'This trigger is used to pull a list of all active note codes from PestPac.',
    hidden: true,
    important: false
  }
};
