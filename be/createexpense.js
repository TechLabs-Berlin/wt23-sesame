const mongoose = require("mongoose");
const { Expenditure } = require("./expenditure");
const { MonthlyExpenditure } = require("./expenditureMonth");
const { ExpenseCat } = require("./topexpenses");
const { MonthlyExpenseCat } = require("./topexpensesmonth");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from createexpense.js");

  //create dummy data for weekly barchart view
  const createExpensesDay = [
    { day: "1", spending: 100 },
    { day: "2", spending: 200 },
    { day: "3", spending: 300 },
    { day: "4", spending: 400 },
    { day: "5", spending: 100 },
  ];

  await Expenditure.deleteMany();
  await Expenditure.insertMany(createExpensesDay);

  //create dummy data for monthly barchart view
  const createExpensesMonth = [
    { month: "1", spending: 100 },
    { month: "2", spending: 200 },
    { month: "3", spending: 300 },
    { month: "4", spending: 400 },
    { month: "5", spending: 100 },
  ];

  await MonthlyExpenditure.deleteMany();
  await MonthlyExpenditure.insertMany(createExpensesMonth);

  //create dummy data for weekly topexpenses view
  const createTopExpenses = [
    { category: "Cat 1", spending: 100 },
    { category: "Cat 2", spending: 200 },
    { category: "Cat 3", spending: 300 },
    { category: "Cat 4", spending: 400 },
    { category: "Cat 5", spending: 100 },
  ];

  await ExpenseCat.deleteMany();
  await ExpenseCat.insertMany(createTopExpenses);

  //create dummy data for monthly topexpenses view
  const createTopExpensesMonth = [
    { category: "Cat 1", spending: 100 },
    { category: "Cat 2", spending: 200 },
    { category: "Cat 3", spending: 300 },
    { category: "Cat 4", spending: 400 },
    { category: "Cat 5", spending: 100 },
    { category: "Cat 6", spending: 123 },
  ];

  await MonthlyExpenseCat.deleteMany();
  await MonthlyExpenseCat.insertMany(createTopExpensesMonth);

  await mongoose.connection.close();
}

main()
  .then(() => console.log("finished!"))
  .catch((err) => console.log("Mongo connection ERROR", err));
