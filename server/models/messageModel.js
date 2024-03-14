const mongoose = require("mongoose")

const schema = mongoose.Schema({
  message: {type: String},
  name: {type: String},
  timestamp: {type: String},
  received: {type: Boolean}
})

module.exports = mongoose.model('message', schema)