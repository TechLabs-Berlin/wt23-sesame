const mongoose = require("mongoose");
main().catch((err) => console.log("Mongo connection ERROR", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from topexpenses.js");
}

const expenseCatSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    maxlength: 20,
  },
  spending: {
    type: Number,
    required: true,
    min: [0, "Spending must be positive!"],
  },
});

const ExpenseCat = mongoose.model("ExpenseCat", expenseCatSchema);

const findAllExpenseCats = async () => {
  return await ExpenseCat.find();
};

// const createExpenseCat = async (details) => {
//   return await ExpenseCat.create(details);
// };

module.exports = {
  findAllExpenseCats, //createExpenseCat//
};
