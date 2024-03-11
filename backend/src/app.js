const express = require('express')
const morgan  = require('morgan')

const cors = require('cors' )
// const path = require('path')

const router = require('./routes/table.route.js')

const app = express();

const config = require('./config/config.js')
const PORT = config.PORT;

//Conection database
const connectionDB = require('./database/database.js')

//Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', router)

//Start server
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})
