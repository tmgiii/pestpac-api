require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - FW_Location_v1', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        User: process.env.USER,
        password: process.env.PASSWORD,
        apikey: process.env.APIKEY,
        Authorization: process.env.AUTHORIZATION,
        tenant_id: process.env.TENANT_ID,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET
      },

      inputData: {}
    };

    const results = await appTester(
      App.triggers['FW_Location_v1'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
