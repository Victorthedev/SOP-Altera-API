const chai = require('chai');
const nock = require('nock');
const dotenv = require('dotenv');
const allteraApi = require('../../allteraApi');

chai.use(require('chai-as-promised'));
const expect = chai.expect;

dotenv.config();

describe('Alltera API', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an SOP in Alltera', async () => {
    const sop = { title: 'New SOP', content: 'Step-by-step instructions' };

    nock(process.env.ALLTERA_API_URL)
      .post('/sops', sop)
      .reply(200, sop);

    const response = await allteraApi.createSOP(sop);
    expect(response.data).to.deep.equal(sop);
  });

  it('should log procedure execution data in Alltera', async () => {
    const procedureData = { sopId: '123', executionDetails: 'Procedure execution details' };

    nock(process.env.ALLTERA_API_URL)
      .post('/procedures', procedureData)
      .reply(200, procedureData);

    const response = await allteraApi.logProcedure(procedureData);
    expect(response.data).to.deep.equal(procedureData);
  });
});
