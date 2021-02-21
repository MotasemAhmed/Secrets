const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.DB_URL, connectionOptions)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;
module.exports = db;
