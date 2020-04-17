require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - create_billTo_note', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
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

    const result = await appTester(
      App.creates['create_billTo_note'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
