const expenditure = require("./expenditure");

function viewExpenseBarChart(app) {
  app.get("/expenseOverviewBarChart", (req, res) => {
    expenditure
      .findAllExpenditures()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.error(err));
  });
}
module.exports = viewExpenseBarChart;
