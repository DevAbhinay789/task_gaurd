const mongoose = require("mongoose");
const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://kinggoluka1234:asdfghjk@cluster0.zrepcuj.mongodb.net/lmsdb").then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
