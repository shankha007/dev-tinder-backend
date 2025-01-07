const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:Shankha%4098@namastenode.ia3h6.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
