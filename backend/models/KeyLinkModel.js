const mongoose = require('mongoose');

const keyLinkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const KeyLink = mongoose.model('KeyLink', keyLinkSchema);

module.exports = KeyLink;