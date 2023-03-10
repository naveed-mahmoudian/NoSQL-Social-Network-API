const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  if (this.reactions.length === 1) {
    return `This thought has ${this.reactions.length} reaction`;
  } else {
    return `This thought has ${this.reactions.length} reactions`;
  }
});

thoughtSchema.path("createdAt").get(function (date) {
  return date.toLocaleString();
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
