const express = require('express');
const cors = require('cors');
const app = express();

const { celebrate, Joi, errors, Segments } = require('celebrate');
const { auth } = require('express-oauth2-jwt-bearer');

const userDataModel = require('../models/UserDataModel');

/* const ReservationModel = require('./models/ReservationModel');
const RestaurantModel = require('./models/RestaurantModel');
const formatReservation = require('../utils/formatReservation');
const formatRestaurant = require('../utils/formatRestaurant'); */

/* const checkJwt = auth({
  audience: 'http://reservationizr.com',
  issuerBaseURL: `https://dev-kcy66oycvvkxkw87.au.auth0.com/`,
}); */

app.use(cors());
app.use(express.json());

const userDataRouter = require('../routes/userData');
app.use('/userData', userDataRouter);

app.get('/', async (req, res) => {
  try {
    const userData = await Item.find();
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.use(errors());

module.exports = app;
