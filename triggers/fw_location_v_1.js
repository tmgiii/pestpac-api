const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

module.exports = {
  operation: { perform: perform, type: 'hook' },
  noun: 'Locationm',
  display: {
    hidden: false,
    important: true,
    description: 'Trigger new location created in PP',
    label: 'New_Location'
  },
  key: 'FW_Location_v1'
};
