const mongoose = require('mongoose');

const actSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Act = mongoose.model('Act', actSchema);

module.exports = Act;