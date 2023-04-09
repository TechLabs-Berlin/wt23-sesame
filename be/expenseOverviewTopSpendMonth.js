const monthlyExpenseCat = require("./topexpensesmonth");

function viewExpenseTopSpendMonth(app) {
  app.get("/expenseOverviewTopSpendMonth", (req, res) => {
    monthlyExpenseCat
      .findAllMonthlyExpenseCats()
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => console.error(err));
  });

}
module.exports = viewExpenseTopSpendMonth;
