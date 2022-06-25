import request from 'supertest'
import app from '../config/app'

describe('Body Cors Middleware', () => {
  test('Should enable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-alow-origin', '*')
      .expect('access-control-alow-methods', '*')
      .expect('access-control-alow-headers', '*')
  })
})
