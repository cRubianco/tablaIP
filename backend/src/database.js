import mongoose from 'mongoose'

import {URLDB} from './config.js'

const url = URLDB;

async function connectionDB() {
  try {
      await mongoose.connect(url);
      const connection = mongoose.connection;
  
      connection.once('open', () => {
          console.log("DB connected!");
      });
  
      connection.on('error', (err) => {
          console.error("Conection error: ", err);
      });
    } catch (error) {
        console.error("Error when connecting", error);
    }

  }

  export default connectionDB;