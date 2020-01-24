const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

require('custom-env').env();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
