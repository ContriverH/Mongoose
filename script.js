const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/mongooseTest");

// using async await instead of promise
async function run() {
  // creating a new user
  //   const user = await new User({ name: "Himanshu", age: 21 });
  /// saving that user
  //   user.save();

  try {
    const user = await User.create({
      name: "Himanshu",
      age: 22,
      email: "himanshu",
      address: { street: "NH-21" },
    });
    // changing certain attribute of the newly created user
    user.name = "Shivam";
    await user.save();

    User.find;
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

// run();
