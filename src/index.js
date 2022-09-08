const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv:', {
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to mongoDB: ", err));
app.use('/,', route);
app.listen(process.env.Port || 3000, function () {
    console.log('Application is listening at PORT:',process.env.PORT||3000)
})