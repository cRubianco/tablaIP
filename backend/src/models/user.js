const { Schema, model } = require('mongoose')

 const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true },
    password: {type: String},
    role: { type: String,
            default: 'user' }
  },
  {
    timestamp: true,
    versionKey: false
  }
)

module.exports = model('User', userSchema);