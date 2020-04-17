// This section created the test end point to pull a list of note codes from PestPac
module.exports = {
  test: {
    url: 'https://api.workwave.com/pestpac/v1/lookups/noteCodes',
    method: 'GET',
    params: { active: 'True' },
    headers: {
      apikey: '{{bundle.authData.apikey}}',
      authorization: '{{bundle.authData.access_token}}',
      'tenant-id': '{{bundle.authData.tenant_id}}'
    },
    body: { tenant_id: '{{bundle.authData.tenant_id}}' },
    removeMissingValuesFrom: { params: false, body: false }
  },
  
  
  // This section configures the fields that will show in the authorization form for the PestPac API
  fields: [
    {
      computed: false,
      default: 'tgibbons@workwave.com',
      required: true,
      label: 'User',
      key: 'User',
      type: 'string'
    },
    {
      computed: false,
      default: 'F&Wpest2016',
      required: true,
      label: 'Password',
      key: 'password',
      type: 'password'
    },
    {
      computed: false,
      default: '152648',
      required: true,
      label: 'Company Key',
      helpText: 'Enter the company key associated with the API key',
      key: 'tenant_id',
      type: 'string'
    },
    {
      computed: false,
      default: 'MQrsnAZgly6UAF9bCMybF1B8Yj0USjtE',
      required: true,
      label: 'API Key',
      helpText: 'Enter your assigned API key',
      key: 'apikey',
      type: 'string'
    },
    {
      computed: false,
      default:
        'Bearer NTZFOE1PWlVaZjJSZkZhRVp3Mm1iSTRmdGlvYTpvNGFNekFfNG1fTnhNSzlzd3V6WnJQSHhsV2th',
      required: true,
      label: 'Authorization Bearer Token',
      key: 'Authorization',
      type: 'string',
      helpText:
        'This is the "Bearer" token that is created using your assigned "Client ID" and "Client Secret"'
    }
  ],
  
  // This section contails the Session configuration details.
  sessionConfig: {
    perform: {
      body: {
        username: '{{bundle.authData.User}}',
        password: '{{bundle.authData.password}}',
        grant_type: 'password'
      },
      url: 'https://is.workwave.com/oauth2/token',
      removeMissingValuesFrom: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: '{{bundle.authData.Authorization}}'
      },
      params: { scope: 'openid' },
      method: 'POST'
    }
  },
  type: 'session',
  connectionLabel: '{{bundle.authData.tenant_id}}'
};
