const mongoose = require('mongoose');

const legislationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
)

const Legislation = mongoose.model('Legislation', legislationSchema);

module.exports = Legislation;