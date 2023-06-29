// Import dependencies 
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const PORT = process.env.PORT;
const app = express();
const Animal = require('./models/animal')
const animalsRouter = require('./controllers/animals');

// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(animalsRouter);


// Listener
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
});