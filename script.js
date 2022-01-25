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
    // const user = await User.create({
    //   name: "Himanshu",
    //   age: 22,
    //   email: "himanshu",
    //   address: { street: "NH-21" },
    // });
    // // changing certain attribute of the newly created user
    // user.name = "Shivam";
    // await user.save();

    // const user1 = await User.where("age")
    //   .gt("21")
    //   .where("name")
    //   .equals("Shivam");
    // // .select("age");
    // user1[0].bestFriend = "61eff24b30b06a6ceb297ed5";
    // await user1[0].save();

    // const user2 = await User.findById("61f01e571c9224aac3db54b5").populate(
    //   "bestFriend"
    // );
    // console.log(user2);

    // const user3 = await User.findById("61f01e571c9224aac3db54b5");
    // user3.sayHi();
    // console.log(user3);
    // const users = await User.findByName("Himanshu");
    // console.log(users);

    // const queryUsers = await User.find().queryByName("Himanshu");
    // console.log(queryUsers);

    // const userDetails = await User.findById("61f01e571c9224aac3db54b5");
    // console.log(userDetails.namedEmail);

    const userDetail = await User.findById("61f01e571c9224aac3db54b5");
    console.log(userDetail.createdAt);
    await userDetail.save();
    console.log(userDetail.createdAt);
  } catch (err) {
    console.log(err.message);
  }
}

run();
