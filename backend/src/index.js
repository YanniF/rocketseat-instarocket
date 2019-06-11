const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://yanni:yanni1@cluster0-sweqy.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);