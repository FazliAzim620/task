const request = require('supertest');
const server = require('./server'); 

describe('GET /api/worksheets', () => {
  let app;

  beforeAll(() => {
    app = server; 
  });

  test('should fetch all worksheets', async () => {
    const response = await request(app)
      .get('/api/worksheets')
      .expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  
  });
});
