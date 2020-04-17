const perform = (z, bundle) => {
  const options = {
    url: 'https://api.workwave.com/pestpac/v1/lookups/Services',
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

    return results.map(function(serviceCode) {
      serviceCode.id = serviceCode.ServiceId; // copy "ServiceId" into a new property named "id" like Zapier wants
      //delete serviceCode.ServiceId;  // delete ServiceId property from object, leaving only the new "id" (optional)
      return serviceCode; // return the transformed version of this element of the array
    });
  });

  // You can do any parsing you need for results here before returning them
  //
  //return results;
  //});
};

module.exports = {
  operation: { perform: perform },
  key: 'get_all_active_services_codes',
  noun: 'Service Codes',
  display: {
    label: 'Get All Active Service Codes',
    description:
      'This trigger is used to pull all active service codes from PestPac.',
    hidden: true,
    important: false
  }
};
