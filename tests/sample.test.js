const request = require('supertest')
const app = require('../index')

describe('Endpoints', () => {

    it('GET / success', async () => {
        const res = await request(app).get('/api/question');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('survey');
        expect(res.body.survey).toHaveLength(0);
    });
})