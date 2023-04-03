const expenseCat = require("./topexpenses");

function viewExpenseTopSpend(app) {
  app.get("/expenseOverviewTopSpend", (req, res) => {
    expenseCat
      .findAllExpenseCats()
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => console.error(err));
  });

  // app.post("/expenseCat", (req, res) => {
  //   expenseCat
  //     .createExpenseCat(req.body)
  //     .then((expense) => {
  //       res.send(expense);
  //     })
  //     .catch((err) => console.error(err));
  // });
  // const rows = [
  //   {
  //     name: "Groceries",
  //     amount: 3434,
  //   },
  //   {
  //     name: "Medicines",
  //     amount: 1212,
  //   },
  //   {
  //     name: "Cat3",
  //     amount: 1212,
  //   },
  // ];
}
module.exports = viewExpenseTopSpend;
