const mongoose = require("mongoose");
const { Expenditure } = require("./expenditure");
const { MonthlyExpenditure } = require("./expenditureMonth");
const { ExpenseCat } = require("./topexpenses");
const { MonthlyExpenseCat } = require("./topexpensesmonth");


main().catch((err) => console.log("Mongo connection ERROR", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - from createexpense.js");
}

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })



  //create dummy data for weekly barchart view
const createExpensesDay = [
  { day: "1", spending: 100 },
  { day: "2", spending: 200 },
  { day: "3", spending: 300 },
  { day: "4", spending: 400 },
  { day: "5", spending: 100 },
];

Expenditure.insertMany(createExpensesDay)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });


  //create dummy data for monthly barchart view
const createExpensesMonth = [
  { month: "1", spending: 100 },
  { month: "2", spending: 200 },
  { month: "3", spending: 300 },
  { month: "4", spending: 400 },
  { month: "5", spending: 100 },
];

MonthlyExpenditure.insertMany(createExpensesMonth)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });


   //create dummy data for weekly topexpenses view
 const createTopExpenses = [
   { category: "Cat 1", spending: 100 },
   { category: "Cat 2", spending: 200 },
   { category: "Cat 3", spending: 300 },
   { category: "Cat 4", spending: 400 },
   { category: "Cat 5", spending: 100 },
 ];

 ExpenseCat.insertMany(createTopExpenses)
   .then((res) => {
     console.log(res);
   })
   .catch((e) => {
     console.log(e);
   });


   //create dummy data for monthly topexpenses view
 const createTopExpensesMonth = [
   { category: "Cat 1", spending: 100 },
   { category: "Cat 2", spending: 200 },
   { category: "Cat 3", spending: 300 },
   { category: "Cat 4", spending: 400 },
   { category: "Cat 5", spending: 100 },
 ];

 MonthlyExpenseCat.insertMany(createTopExpensesMonth)
   .then((res) => {
     console.log(res);
   })
   .catch((e) => {
     console.log(e);
   });
//   try {
//         const res = await Expenditure.create(createExpenses);
//         console.log(res);
//     } catch (e) {
//         console.log(e);
//     }

//     // close the connection after inserting data
//     await mongoose.connection.close();
