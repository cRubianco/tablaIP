const { Schema, model } = require('mongoose')

 const userSchema = new Schema(
  {
    username: {type: String, unique: true},
    password: {type: String, require: true},
    role: { type: String,
            default: 'user' }
  },
  {
    timestamp: true,
    versionKey: false
  }
)

module.exports = model('User', userSchema);