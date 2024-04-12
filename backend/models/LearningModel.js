const mongoose = require('mongoose');

const learningSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Learning = mongoose.model('Learning', learningSchema);

module.exports = Learning;