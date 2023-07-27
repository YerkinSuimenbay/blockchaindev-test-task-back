const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connecting to DB...");
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
};

module.exports = connectDB;
