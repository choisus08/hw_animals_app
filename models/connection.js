require('dotenv').config();
const mongoose = require('mongoose');

// connect to our db
mongoose.connect(process.env.DATABASE_URL);


// connection by console.logs
mongoose.connection
    .on('open', () => console.log('connected to mongoose'))
    .on('close', () => console.log('disconnected from mongoose'))
    .on('error', (error) => console.log(error));

// export
module.exports = mongoose;