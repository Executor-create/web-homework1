const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const theaterRouter = require('./api/theater/getTheater');

const app = express();

const setup = require('./DB/mongoose');

app.use(bodyParser.json());
app.use(theaterRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started ${process.env.PORT}`);
});

setup();