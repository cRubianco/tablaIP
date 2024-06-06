const { Schema, model } = require('mongoose')

 const addrSchema = new Schema(
  {
    nro: {type: String, required: true, unique: true},
    dependency: {type: String},
    address: {type: String, required: true, unique: true},
    passwd: {type: String},
    user: {type: String},
    observ: {type: String},
    other: {type: String},
  },
  {
    timestamp: true,
    versionKey: false
  }
)

module.exports = model('Emails', addrSchema)

