const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const classSchema = new Schema(
  {
    classText: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    testText: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

classSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Class = model('Class', classSchema);

module.exports = Class;