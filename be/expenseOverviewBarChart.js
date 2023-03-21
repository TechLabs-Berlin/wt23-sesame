function viewExpenseBarChart(app) {
  app.get("/expenseOverviewBarChart", (req, res) => {
    const data = [
      { day: "Mon", spending: 200 },
      { day: "Tue", spending: 100 },
      { day: "Wed", spending: 300 },
      { day: "Thu", spending: 400 },
      { day: "Fri", spending: 150 },
      { day: "Sat", spending: 250 },
      { day: "Sun", spending: 350 },
    ];
    res.send(data);
  });
}
module.exports = viewExpenseBarChart;
