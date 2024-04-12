const mongoose = require('mongoose');

const generalLinkSchema = mongoose.Schema(
  {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const GeneralLink = mongoose.model('General Link', generalLinkSchema);

module.exports = GeneralLink;