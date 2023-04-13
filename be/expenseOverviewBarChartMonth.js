const fs = require("fs").promises;
const path = require("path");

const findAllMonthlyExpenditures = async () => {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "DS",
      "Data",
      "processed_data",
      "data_monthlyview.json"
    );
    const fileContents = await fs.readFile(filePath, "utf-8");
    const {
      Monthly_View: { Month_val, Months, Months_Sum, Months_Avg, Months_Top5 },
    } = JSON.parse(fileContents);

    const expenditures = Month_val.map((value, index) => ({
      _id: index.toString(),
      day: value[0],
      spending: value[1],
      __v: 0,
    }));

    const ExpenseCat = Months_Top5.map((value, index) => ({
      _id: index.toString(),
      category: value[0],
      spending: value[1],
      __v: 0,
    }));

    return {
      expenditures,
      totalSpending: Months_Sum,
      dailyAverage: Months_Avg,
      ExpenseCat,
      timePeriod: Months,
    };
  } catch (error) {
    console.error(error);
  }
};

const viewExpenseBarChartMonth = (app) => {
  app.get("/expenseOverviewBarChartMonth", async (req, res) => {
    try {
      const data = await findAllMonthlyExpenditures();
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
};

module.exports = viewExpenseBarChartMonth;
