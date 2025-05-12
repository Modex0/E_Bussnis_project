const mongoose = require("mongoose");

function DBConnect(connection) {
  try {
    mongoose.connect(connection).then(() => {
      console.log("DB Is connected");
    });
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = DBConnect;
