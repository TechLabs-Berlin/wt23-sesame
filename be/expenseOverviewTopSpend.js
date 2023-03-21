function viewExpenseTopSpend(app) {
  app.get("/expenseOverviewTopSpend", (req, res) => {
    const rows = [
      {
        name: "Groceries",
        amount: 3434,
      },
      {
        name: "Medicines",
        amount: 1212,
      },
      {
        name: "Cat3",
        amount: 1212,
      },
    ];
    res.send(rows);
  });
}
module.exports = viewExpenseTopSpend;
