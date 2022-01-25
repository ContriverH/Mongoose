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
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`Hi world! myself ${this.name}.`);
};

userSchema.statics.findByName = function (name) {
  return this.where({ name: new RegExp(name, "i") }); // making the name case insensitive
};

userSchema.query.queryByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

// Now for the model creation, you need to tell the mongoose to create a model based on this schema.
module.exports = mongoose.model("User", userSchema);
