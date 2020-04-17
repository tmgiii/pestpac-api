const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

module.exports = {
  operation: { perform: perform, type: 'hook' },
  noun: 'location1',
  display: {
    hidden: false,
    important: true,
    description: 'Test webhook for creation of the Location',
    label: 'create_new_location1'
  },
  key: 'New_Location1'
};
