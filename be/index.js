const express = require("express");
const addBillRoutes = require("./billsRoute");
const viewExpense = require("./expenseOverview");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Our express server is up and running");
});

app.listen(port, () => {
  console.log(`Our server is up and running on port ${port}`);
});
addBillRoutes(app);
viewExpense(app);
