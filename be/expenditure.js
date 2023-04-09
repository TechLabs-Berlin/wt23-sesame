const mongoose = require("mongoose");
main().catch((err) => console.log("Mongo connection ERROR", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from expenditure.js");
}

const expenditureSchema = new mongoose.Schema({
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

const Expenditure = mongoose.model("Expenditure", expenditureSchema);

const findAllExpenditures = async () => {
  return await Expenditure.find();
};

module.exports = { Expenditure, findAllExpenditures };
