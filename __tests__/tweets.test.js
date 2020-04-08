require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('tweet routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  it('makes a post with markov', () => {
    return request(app)
      .post('/api/v1/tweets')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tweetText: expect.any(String),
          handle: expect.any(String),
          __v: 0
        });
      });
  });
});
