const perform = (z, bundle) => {
  const options = {
    url: 'https://api.workwave.com/pestpac/v1/lookups/Employees?active=true',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      apikey: bundle.authData.apikey,
      'tenant-id': bundle.authData.tenant_id,
      authorization: bundle.authData.access_token,
      'Content-Type': '*/*'
    },
    params: {}
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    return results.map(function(employee) {
      employee.id = employee.EmployeeID; // copy "EmployeeID" into a new property named "id" like Zapier wants
      //delete employee.EmployeeID;  // delete EmployeeID property from object, leaving only the new "id" (optional)
      return employee; // return the transformed version of this element of the array
    });
  });

  // You can do any parsing you need for results here before returning them

  //		return results;
  //	});
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      EmployeeID: 19,
      UserID: 103,
      TechID: 164,
      DefaultBranch: 'Framingham',
      Active: true,
      IsUser: true,
      IsTech: true,
      Username: 'ADMN',
      Email: 'administrator@fwpest.com',
      WorkWaveID: 'administrator@fwpest.com',
      LastName: '',
      FirstName: 'Administrator',
      MiddleName: '',
      Address: '',
      AddressLine2: '',
      City: '',
      State: '',
      Zip: '',
      Phone: '',
      PhoneExtension: '',
      Mobile: '',
      MobileExtension: '',
      OfficePhone: '',
      OfficePhoneExtension: '',
      BirthDate: '1900-01-01T00:00:00',
      EmployeeNumber: '',
      JobTitle: '',
      HireDate: '1900-01-01T00:00:00',
      TerminationDate: null,
      TimeZone: 'Eastern Standard Time',
      UserDefinedFields: [
        { Caption: 'QP Passed', Value: '' },
        { Caption: 'QP Schools', Value: '' },
        { Caption: 'Driver', Value: '' },
        { Caption: 'BGND Check', Value: '' },
        { Caption: 'Non-Comp', Value: '' }
      ],
      id: 19
    },
    outputFields: [
      { key: 'id', label: 'Zapier ID', type: 'integer' },
      { key: 'Username', label: 'Username', type: 'string' },
      { key: 'FirstName', label: 'First Name', type: 'string' },
      { key: 'LastName', label: 'Last Name', type: 'string' }
    ]
  },
  key: 'get_all_active_employees',
  noun: 'Employees',
  display: {
    label: 'Get All Active Employees',
    description:
      'Get all active employees is used for dynamic dropdown menu options.',
    hidden: true,
    important: false
  }
};
