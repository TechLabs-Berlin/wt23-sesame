const expenditure = require("./expenditure");

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
  const expenditures = await expenditure.Expenditure.find();
  const totalSpending = expenditures.reduce((total, expenditure) => {
    return total + expenditure.spending;
  }, 0);
  const dailyAverage = Number((totalSpending / 7).toFixed(2)); // assuming 7 days of data
  return { expenditures, totalSpending, dailyAverage };
};

module.exports = viewExpenseBarChart;
