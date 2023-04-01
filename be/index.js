const express = require("express");
const cors = require("cors");
const addBillRoutes = require("./billsRoute");
const viewExpenseBarChart = require("./expenseOverviewBarChart");
const viewExpenseTopSpend = require("./expenseOverviewTopSpend");

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Our express server is up and running");
});

app.listen(port, () => {
  console.log(`Our server is up and running on port ${port}`);
});
addBillRoutes(app);
viewExpenseBarChart(app);
viewExpenseTopSpend(app);
