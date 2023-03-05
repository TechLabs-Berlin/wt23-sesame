function viewExpense(app) {
  app.get("/expenseOverview", (req, res) => {
    res.send({
      monthlyAverage: {
        month1: 3,
        month2: 5,
      },
      weeklyAverage: {
        week1: 30,
        week2: 50,
      },

      categories: [
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
      ],
    });
  });
}
module.exports = viewExpense;
