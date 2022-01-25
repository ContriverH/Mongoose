// It is the User schema
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  age: {
    type: Number,
    min: 8,
    max: 70,
    validate: {
      validator: (x) => x % 2 === 0,
      message: (props) =>
        `${props.value} is not even. Only even numbers are allowed!`,
    },
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: Date,
  updateAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

// Now for the model creation, you need to tell the mongoose to create a model based on this schema.
module.exports = mongoose.model("User", userSchema);
