const mongoose = require("mongoose");

const uri = process.env.MONGO_MIS_URI;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (error) {
    if (error) {
      console.log(error);
    }
  }
);
const EntrySchema = new mongoose.Schema({
  gender: String,
  parent: String,
  qtwo: {
    choice: String,
    response: String,
  },
  qthree: {
    choice: String,
    response: String,
  },
  qfour: {
    choice: String,
    response: String,
  },
  qfive: {
    choice: String,
    response: String,
  },
  qsix: {
    choice: String,
    response: String,
  },
  qseven: {
    choice: String,
    response: String,
  },
  qeight: {
    response: String,
  },
  qnine: {
    response: String,
  },
});
const Entry = mongoose.model("Entry", EntrySchema, "Entry");
module.exports = Entry;
