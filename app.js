const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const pizzaRoutes = require('./routes/pizza');
const ingredientRoutes = require('./routes/ingredient');

const app = express();

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

//CORS stands for Cross Origin Resource Sharing. 
//It is a standard that allows us to relax default security rules which prevent HTTP calls from being made between different servers.
//I added it to connect the interface with the API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//To handle the POST request coming from the front-end app, we'll need to be able to extract the JSON object from the request 
//We will need the  body-parser  package.
app.use(bodyParser.json());

app.use('/pizzeria/pizza', pizzaRoutes);
app.use('/pizzeria/ingredient', ingredientRoutes);

module.exports = app;