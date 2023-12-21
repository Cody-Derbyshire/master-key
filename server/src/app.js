const express = require('express');
const cors = require('cors');
const app = express();

const { celebrate, Joi, errors, Segments } = require('celebrate');
const { auth } = require('express-oauth2-jwt-bearer');

/* const checkJwt = auth({
  audience: 'http://reservationizr.com',
  issuerBaseURL: `https://dev-kcy66oycvvkxkw87.au.auth0.com/`,
}); */

app.use(cors());
app.use(express.json());

const userDataRouter = require('../routes/userData');
app.use('/userData', userDataRouter);

app.use(errors());

module.exports = app;
