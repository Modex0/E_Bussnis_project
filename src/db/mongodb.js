const mongoose = require("mongoose");

function DBConnect() {
  try {
    mongoose.connect(process.env.DB).then(() => {
      console.log("DB Is connected");
    });
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = DBConnect;
