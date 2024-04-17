const { Schema, model } = require('mongoose')

 const addrSchema = new Schema(
  {
    nro: {type: String, required: true, unique: true},
    address: {type: String, required: true, unique: true},
    group: {type: String, required: true},
    user: {type: String },
    pcname: {type: String},
    dependency: {type: String},
    opersystem: {type: String},
    observ: {type: String},
    type: {type: String},
    other: {type: String},
  },
  {
    timestamp: true,
    versionKey: false
  }
)

module.exports = model('Address', addrSchema)

