module.exports = {
  operation: {
    perform: {
      url:
        'https://api.workwave.com/pestpac/v1/Leads?startReceivedDate=2020-02-18',
      method: 'GET',
      params: { startReceivedDate: 'today' },
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        apikey: '{{bundle.authData.apikey}}',
        'tenant-id': '{{bundle.authData.tenant_id}}',
        Authorization: '{{bundle.authData.access_token}}'
      },
      body: {},
      removeMissingValuesFrom: {}
    },
    type: 'polling',
    sample: {
      LeadID: 30149,
      LocationID: 90235,
      Branch: null,
      LeadType: 'Lead',
      WonStatus: 'Open',
      DateReceived: '2020-03-12T15:55:00',
      Name: 'Tommy Test',
      Company: '',
      Source: null,
      ServiceCode: 'ESTIMATE',
      Salesperson: null,
      TargetPest: null,
      ProposalValue: 0,
      SalesStatus: null,
      PendingEvent: null,
      PendingEventDate: '2020-03-23T00:00:00',
      TimeRange: '2-4',
      Duration: 60
    },
    outputFields: [
      { key: 'ID', type: 'integer', label: 'LeadID' },
      { key: 'LocationID', type: 'integer', label: 'LocationID' },
      { key: 'Branch', label: 'Branch' },
      { key: 'LeadType', label: 'LeadType' },
      { key: 'WonStatus', label: 'WonStatus' },
      { key: 'DateReceived', label: 'DateReceived' },
      { key: 'Name', label: 'Name' },
      { key: 'Company', label: 'Company' },
      { key: 'Source', label: 'Source' },
      { key: 'ServiceCode', label: 'ServiceCode' },
      { key: 'Salesperson', label: 'Salesperson' },
      { key: 'TargetPest', label: 'TargetPest' },
      { key: 'ProposalValue', type: 'number', label: 'ProposalValue' },
      { key: 'SalesStatus', label: 'SalesStatus' },
      { key: 'PendingEvent', label: 'PendingEvent' },
      { key: 'PendingEventDate', label: 'PendingEventDate' },
      { key: 'TimeRange', label: 'TimeRange' },
      { key: 'Duration', type: 'integer', label: 'Duration' }
    ]
  },
  key: 'new_lead',
  noun: 'Lead',
  display: {
    label: 'New Lead',
    description: 'Triggers when a new lead is added in PestPac',
    hidden: false,
    important: true
  }
};
