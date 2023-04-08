// const expenditure = require("./expenditure");
// const fs = require("fs");

// function viewExpenseBarChart(app) {
//   app.get("/expenseOverviewBarChart", (req, res) => {
//     findAllExpenditures()
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => console.error(err));
//   });
// }

// const findAllExpenditures = async () => {

//   const expenditures = await expenditure.Expenditure.find();
//   const totalSpending = expenditures.reduce((total, expenditure) => {
//     return total + expenditure.spending;
//   }, 0);
//   const dailyAverage = Number((totalSpending / 7).toFixed(2)); // assuming 7 days of data
//   return { expenditures, totalSpending, dailyAverage };
// };

// module.exports = viewExpenseBarChart;


// const fs = require("fs");
// const path = require("path");

// function viewExpenseBarChart(app) {
//   app.get("/expenseOverviewBarChart", (req, res) => {
//     findAllExpenditures()
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => console.error(err));
//   });
// }

// const findAllExpenditures = async () => {
//   try {
//     const filePath = path.join(
//       __dirname,
//       "..",
//       "DS",
//       "Data",
//       "processed_data",
//       "data_Week35_Test.json"
//     );
//     const fileContents = await fs.promises.readFile(filePath, "utf-8");
//     const jsonData = JSON.parse(fileContents);

//     const expenditures = jsonData.Week_35.Week_val;
//     const totalSpending = jsonData.Week_35.Week_Sum;
//     const dailyAverage = jsonData.Week_35.Week_Avg;

//     return { expenditures, totalSpending, dailyAverage };
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = viewExpenseBarChart;


const fs = require("fs");
const path = require("path");

function viewExpenseBarChart(app) {
  app.get("/expenseOverviewBarChart", (req, res) => {
    findAllExpenditures()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.error(err));
  });
}

const findAllExpenditures = async () => {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "DS",
      "Data",
      "processed_data",
      "data_Week35_Test.json"
    );
    const fileContents = await fs.promises.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    const dailyExpenditures = jsonData.Week_35.Week_val.map((value, index) => {
      return {
        _id: index.toString(),
        day: (index + 1).toString(),
        spending: value[1],
        __v: 0,
      };
    });

    const totalSpending = jsonData.Week_35.Week_Sum;
    const dailyAverage = jsonData.Week_35.Week_Avg;
    const ExpenseCat = jsonData.Week_35.Week_Top5;


    return {
      expenditures: dailyExpenditures,
      totalSpending,
      dailyAverage,
      ExpenseCat,
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = findAllExpenditures;
module.exports = viewExpenseBarChart;

