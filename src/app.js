//using path for join independing of operating system
const path = require('path');
//using express
const express = require('express');
//using morgan as middleware
const morgan = require('morgan');
//using mongoose to connect to database
const mongoose = require('mongoose');
//initialize express
const app = express();

//connect to database
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('conectado a la bd'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware (express)
app.use(morgan('dev'));//morgan for show request in console from clients
app.use(express.urlencoded({extended: false}));//receive only data, not image, not large data

//routes
app.use('/', indexRoutes);

//starting server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});