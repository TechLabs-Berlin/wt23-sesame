const monthExpenditure = require("./expenditureMonth");

function viewExpenseBarChartMonth(app) {
  app.get("/expenseOverviewBarChartMonth", (req, res) => {
    findAllMonthlyExpenditures()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.error(err));
  });
}

const findAllMonthlyExpenditures = async () => {
  const monthExpenditures = await monthExpenditure.MonthlyExpenditure.find();
  const totalSpending = monthExpenditures.reduce((total, monthExpenditure) => {
    return total + monthExpenditure.spending;
  }, 0);
  const monthlyAverage = Number((totalSpending / 12).toFixed(2)); // assuming 12 months of data
  return { monthExpenditures, totalSpending, monthlyAverage };
};

module.exports = viewExpenseBarChartMonth;
