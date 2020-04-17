const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

module.exports = {
  operation: {
    perform: perform,
    type: 'hook',
    performSubscribe: {
      url: 'https://api.workwave.com/pestpac/v1/webhooks/',
      method: 'POST',
      params: {},
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        apikey: '{{bundle.authData.apikey}}',
        authorization: '{{bundle.authData.access_token}}',
        'tenant-id': '{{bundle.authData.tenant_id}}'
      },
      body: {
        PostToUrl: '{{bundle.targetUrl}}',
        EntityType: 'Service Order',
        Action: 'Create',
        IncludeEntityBody: 'True',
        SubscriptionId: '{{bundle.inputData.SubscriptionID}}'
      },
      removeMissingValuesFrom: {}
    },
    performUnsubscribe: {
      url:
        'https://api.workwave.com/pestpac/v1/webhooks/{{bundle.subscribeData.SubscriptionID}}',
      method: 'DELETE',
      params: {},
      headers: {
        apikey: '{{bundle.authData.apikey}}',
        authorization: '{{bundle.authData.access-_token}}',
        'tenant-id': '{{bundle.authData.tenant_id}}'
      },
      body: {},
      removeMissingValuesFrom: {}
    },
    inputFields: [
      {
        key: 'EntityType',
        type: 'string',
        label: 'EntityType',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'SubscriptionID',
        type: 'integer',
        label: 'SubscriptionID',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'Action',
        type: 'string',
        label: 'Action',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'PostToUrl',
        type: 'string',
        label: 'PostToUrl',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'IncludeEntityBody',
        type: 'boolean',
        label: 'IncludeEntityBody',
        required: false,
        list: false,
        altersDynamicFields: false
      }
    ],
    sample: {
      SubscriptionID: 34,
      EntityType: 'Service Order',
      Action: 'Create',
      PostToUrl: 'https://hooks.zapier.com/fake-subscription-url',
      IncludeEntityBody: true
    },
    outputFields: [
      { key: 'SubscriptionID', type: 'integer' },
      { key: 'EntityType' },
      { key: 'Action' },
      { key: 'PostToUrl' },
      { key: 'IncludeEntityBody', type: 'boolean' }
    ]
  },
  key: 'new_service_order',
  noun: 'Service Order',
  display: {
    label: 'New Service Order',
    description:
      'Webhook triggers on the creation of new service orders in PestPac.',
    hidden: false,
    important: true
  }
};
