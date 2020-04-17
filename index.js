const authentication = require('./authentication');
const newLocationTrigger = require('./triggers/new_location.js');
const newLocation1Trigger = require('./triggers/new_location_1.js');
const fwLocationV1Trigger = require('./triggers/fw_location_v_1.js');
const newLeadTrigger = require('./triggers/new_lead.js');
const newServiceOrderTrigger = require('./triggers/new_service_order.js');
const getAllActiveEmployeesTrigger = require('./triggers/get_all_active_employees.js');
const getAllActiveNoteCodesTrigger = require('./triggers/get_all_active_note_codes.js');
const getAllActiveServicesCodesTrigger = require('./triggers/get_all_active_services_codes.js');
const createBillToNoteCreate = require('./creates/create_bill_to_note.js');
const getNoteCodesSearch = require('./searches/get_note_codes.js');

module.exports = {
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  version: require('./package.json').version,
  triggers: {
    [newLocationTrigger.key]: newLocationTrigger,
    [newLocation1Trigger.key]: newLocation1Trigger,
    [fwLocationV1Trigger.key]: fwLocationV1Trigger,
    [newLeadTrigger.key]: newLeadTrigger,
    [newServiceOrderTrigger.key]: newServiceOrderTrigger,
    [getAllActiveEmployeesTrigger.key]: getAllActiveEmployeesTrigger,
    [getAllActiveNoteCodesTrigger.key]: getAllActiveNoteCodesTrigger,
    [getAllActiveServicesCodesTrigger.key]: getAllActiveServicesCodesTrigger
  },
  creates: { [createBillToNoteCreate.key]: createBillToNoteCreate },
  searches: { [getNoteCodesSearch.key]: getNoteCodesSearch }
};
