const express = require('express');
const morgan  = require('morgan');

const cors = require('cors' );
// const path = require('path')

const app = express();

const config = require('./config/config.js');
const PORT = config.PORT;

//Conection database
const connectionDB = require('./database/database.js');

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
// app.use('/api', router)
app.use('/api', require('./routes/routes'));

//Start server
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})
