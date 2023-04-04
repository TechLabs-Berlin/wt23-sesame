const mongoose = require("mongoose");
main().catch((err) => console.log("Mongo connection ERROR", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from monthlyexpenditure.js");
}

const monthlyexpenditureSchema = new mongoose.Schema({
  day: {
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

const MonthlyExpenditure = mongoose.model("MonthlyExpenditure", monthlyexpenditureSchema);

const findAllMonthlyExpenditures = async () => {
  return await MonthlyExpenditure.find();
};

module.exports = { MonthlyExpenditure, findAllMonthlyExpenditures };
