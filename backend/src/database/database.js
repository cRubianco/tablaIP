const mongoose = require("mongoose");

const URI_DB = "mongodb://127.0.0.1:27017/Munic";

 async function connectionDB() {
  try {
    const conn = await mongoose.connect(URI_DB);
    console.log("DB is connected", conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.export = connectionDB();