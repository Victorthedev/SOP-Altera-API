const chai = require('chai');
const chaiHttp = require('chai-http');
const dotenv = require('dotenv');

chai.use(chaiHttp);
const expect = chai.expect;

dotenv.config();

const serverUrl = `http://localhost:${process.env.PORT}`;

describe('SOPHIA and Altera Integration', () => {

  it('should create an SOP in SOPHIA and push it to Altera', async () => {
    const newSOP = {
      title: 'New SOP',
      content: 'Step-by-step instructions',
    };

    const res = await chai
      .request(serverUrl)
      .post('/sophia/sops')
      .send({ sop: newSOP });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('sophia');
    expect(res.body.sophia).to.have.property('title').equal(newSOP.title);
    expect(res.body.sophia).to.have.property('content').equal(newSOP.content);
    expect(res.body).to.have.property('altera');
    expect(res.body.altera).to.have.property('title').equal(newSOP.title);
    expect(res.body.altera).to.have.property('content').equal(newSOP.content);
  });

  it('should fetch an SOP from SOPHIA based on ID', async () => {
    const sopId = '123';

    const res = await chai
      .request(serverUrl)
      .get(`/sophia/sops/${sopId}`);

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('id').equal(sopId);
  });

  it('should log procedure execution data in SOPHIA', async () => {
    const procedureData = {
      sopId: '123',
      executionDetails: 'Procedure execution details',
    };

    const res = await chai
      .request(serverUrl)
      .post('/sophia/procedures')
      .send(procedureData);

    expect(res).to.have.status(200);
  });
});
