const chai = require('chai');
const nock = require('nock');
const dotenv = require('dotenv');
const sophiaApi = require('../../sophiaApi');

chai.use(require('chai-as-promised'));
const expect = chai.expect;

dotenv.config();

describe('SOPHIA API', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an SOP in SOPHIA', async () => {
    const sop = { title: 'New SOP', content: 'Step-by-step instructions' };

    nock(process.env.SOPHIA_API_URL)
      .post('/sops', sop)
      .reply(200, sop);

    const response = await sophiaApi.createSOP(sop);
    expect(response.data).to.deep.equal(sop);
  });

  it('should fetch an SOP from SOPHIA by ID', async () => {
    const sopId = '123';
    const sop = { id: sopId, title: 'SOP Title', content: 'SOP Content' };

    nock(process.env.SOPHIA_API_URL)
      .get(`/sops/${sopId}`)
      .reply(200, sop);

    const response = await sophiaApi.getSOP(sopId);
    expect(response.data).to.deep.equal(sop);
  });

  it('should push an SOP to Alltera', async () => {
    const sop = { title: 'New SOP', content: 'Step-by-step instructions' };

    nock(process.env.ALLTERA_API_URL)
      .post('/sops', sop)
      .reply(200, sop);

    const response = await sophiaApi.pushSOPToAlltera(sop);
    expect(response.data).to.deep.equal(sop);
  });

  it('should log procedure execution data in SOPHIA', async () => {
    const procedureData = { sopId: '123', executionDetails: 'Procedure execution details' };

    nock(process.env.SOPHIA_API_URL)
      .post('/procedures', procedureData)
      .reply(200, procedureData);

    const response = await sophiaApi.logProcedure(procedureData);
    expect(response.data).to.deep.equal(procedureData);
  });
});