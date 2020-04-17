const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

module.exports = {
  operation: {
    perform: perform,
    performSubscribe: {
      body: { hookUrl: '{{bundle.targetUrl}}' },
      url: 'https://api.workwave.com/pestpac/v1/WebHooks',
      removeMissingValuesFrom: {},
      headers: {
        'X-USER': '{{bundle.authData.User}}',
        'X-AUTHORIZATION': '{{bundle.authData.Authorization}}',
        'X-APIKEY': '{{bundle.authData.apikey}}',
        Accept: 'application/json',
        'X-TENANT-ID': '{{bundle.authData.tenant-id}}',
        'X-PASSWORD': '{{bundle.authData.password}}',
        'Content-Type': 'application/json'
      },
      params: {
        password: '{{bundle.authData.password}}',
        apikey: '{{bundle.authData.apikey}}',
        User: '{{bundle.authData.User}}',
        Authorization: '{{bundle.authData.Authorization}}',
        'tenant-id': '{{bundle.authData.tenant-id}}'
      },
      method: 'POST'
    },
    type: 'hook',
    performList: {
      body: {},
      url: 'https://api.workwave.com/pestpac/v1/WebHooks',
      removeMissingValuesFrom: {},
      headers: {
        'X-USER': '{{bundle.authData.User}}',
        'X-AUTHORIZATION': '{{bundle.authData.Authorization}}',
        'X-APIKEY': '{{bundle.authData.apikey}}',
        Accept: 'application/json',
        'X-TENANT-ID': '{{bundle.authData.tenant-id}}',
        'X-PASSWORD': '{{bundle.authData.password}}'
      },
      params: {
        password: '{{bundle.authData.password}}',
        apikey: '{{bundle.authData.apikey}}',
        User: '{{bundle.authData.User}}',
        Authorization: '{{bundle.authData.Authorization}}',
        'tenant-id': '{{bundle.authData.tenant-id}}'
      },
      method: 'GET'
    }
  },
  noun: 'location',
  display: {
    hidden: false,
    important: true,
    description: 'Create notification from webhook',
    label: 'create_new_location'
  },
  key: 'New_Location'
};
