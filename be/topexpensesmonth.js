const mongoose = require("mongoose");
main().catch((err) => console.log("Mongo connection ERROR", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from topexpensesmonth.js");
}

const monthlyExpenseCatSchema = new mongoose.Schema({
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

const MonthlyExpenseCat = mongoose.model("monthlyExpenseCat", monthlyExpenseCatSchema);

const findAllMonthlyExpenseCats = async () => {
  return await MonthlyExpenseCat.find();
};

// const createMonthlyExpenseCat = async (details) => {
//   return await monthlyExpenseCat.create(details);
// };

module.exports = {MonthlyExpenseCat,
  findAllMonthlyExpenseCats, //createMonthlyExpenseCat//
};
