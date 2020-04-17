const perform = (z, bundle) => {
  const options = {
    url: `https://api.workwave.com/pestpac/v1/BillTos/${bundle.inputData.billToId}/notes`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
      Accept: 'text/html',
      Apikey: bundle.authData.apikey,
      'tenant-id': bundle.authData.tenant_id,
      Authorization: bundle.authData.access_token
    },
    params: {},
    body: {
      noteDate: bundle.inputData.noteDate,
      noteCode: bundle.inputData.noteCode,
      note: bundle.inputData.note,
      createdByUser: bundle.inputData.createdByUser,
      alertExpirationDate: bundle.inputData.alertExpirationDate,
      showOnPortal: bundle.inputData.showOnPortal,
      isEmail: bundle.inputData.isEmail,
      wwid: bundle.inputData.wwid
    }
  };

  return z.request(options).then(response => {
    if (response.status === 401) {
      throw new z.errors.RefreshAuthError(); //Ask for a refresh and retry
    }

    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'billToId',
        label: 'Bill-To ID',
        type: 'integer',
        helpText:
          'Please enter the Bill-To ID number. Please note that this is not the same as the Bill-To account number.',
        required: true,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'noteDate',
        label: 'Date',
        type: 'string',
        helpText:
          'Please enter the date that the note should use for its creation. (optional)',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'noteCode',
        label: 'Note Code',
        type: 'string',
        helpText:
          'Please enter the note code to be used when creating this note in PestPac.',
        dynamic: 'get_all_active_note_codes.Code.Description',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'note',
        label: 'Note',
        type: 'string',
        helpText: 'Please enter your note text here.',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'createdByUser',
        label: 'User',
        type: 'string',
        helpText: 'Enter the PestPac user name. (optional)',
        dynamic: 'get_all_active_employees.Username',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'alertExpirationDate',
        label: 'Alert Note Expiration Date',
        type: 'string',
        helpText:
          'If you\'re creating an "ALERT", or "HHALERT" note please include the expiration date. (optional)',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'showOnPortal',
        label: 'Show On Customer Portal',
        type: 'boolean',
        helpText:
          'Please choose if this note should be visible to customers when they log into the customer portal site. (optional)',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'isEmail',
        label: 'Is Email',
        type: 'boolean',
        helpText: 'Not sure what this field is used for.',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'wwid',
        label: 'WorkWave ID',
        type: 'string',
        helpText:
          "Enter your WorkWave ID here. I'm not sure what this is used for. (optional)",
        required: false,
        list: false,
        altersDynamicFields: false
      }
    ],
    sample: {
      NoteID: 791940,
      NoteDate: '2020-05-01T00:00:00',
      NoteCode: 'MTO',
      Note: 'test',
      CreatedByUser: 'TMG',
      AlertExpirationDate: null,
      ShowOnPortal: false,
      WWID: null,
      Associations: {
        LocationID: null,
        ContactID: null,
        BillToID: 75449,
        TaskID: null,
        OrderID: null,
        SalesLeadID: null,
        InvoiceID: null,
        CallID: null
      }
    },
    outputFields: [
      { key: 'NoteID', type: 'integer', label: 'Note ID' },
      { key: 'NoteDate', label: 'Note Date' },
      { key: 'NoteCode', label: 'Note Code' },
      { key: 'Note', label: 'Note' },
      { key: 'CreatedByUser', label: 'Created By User' },
      { key: 'AlertExpirationDate', label: 'Alert Expiration Date' },
      { key: 'ShowOnPortal', type: 'boolean', label: 'Show On Portal' },
      { key: 'WWID', label: 'WWID' },
      {
        key: 'Associations__LocationID',
        type: 'integer',
        label: 'Associations__LocationID'
      },
      {
        key: 'Associations__ContactID',
        type: 'integer',
        label: 'Associations__ContactID'
      },
      {
        key: 'Associations__BillToID',
        type: 'integer',
        label: 'Associations__BillToID'
      },
      {
        key: 'Associations__TaskID',
        type: 'integer',
        label: 'Associations__TaskID'
      },
      {
        key: 'Associations__OrderID',
        type: 'integer',
        label: 'Associations__OrderID'
      },
      {
        key: 'Associations__SalesLeadID',
        type: 'integer',
        label: 'Associations__SalesLeadID'
      },
      {
        key: 'Associations__InvoiceID',
        type: 'integer',
        label: 'Associations__InvoiceID'
      },
      {
        key: 'Associations__CallID',
        type: 'integer',
        label: 'Associations__CallID'
      }
    ]
  },
  key: 'create_billTo_note',
  noun: 'Bill-To',
  display: {
    label: 'Create a Note on a Bill-To Account',
    description:
      'This action will create a new not on a Bill-To account in PestPac.',
    hidden: false,
    important: true
  }
};
