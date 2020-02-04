const express = require('express');
const mongoose = require('mongoose');

const cors = require('./cors');
const routes = require('./routes');

const app = express();

require('custom-env').env();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
