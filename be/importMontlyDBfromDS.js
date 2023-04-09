const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

// Connect to MongoDB
main().catch((err) =>
  console.log("Mongo connection ERROR to import data", err)
);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sesame");
  console.log("Mongo connection OPENED - to import data");
}

// Define schema
const MonthlyExpenditureSchema = new mongoose.Schema({
  date: { type: Date },
  spending: { type: Number },
});

const MonthlyExpenseCatSchema = new mongoose.Schema({
  category: { type: String },
  spending: { type: Number },
});

const MonthlyExpendituresSchema = new mongoose.Schema({
  expenditures: [MonthlyExpenditureSchema],
  totalSpending: { type: Number },
  dailyAverage: { type: Number },
  expenseCat: [MonthlyExpenseCatSchema],
});

// Create model
const MonthlyExpenditures = mongoose.model(
  "MonthlyExpenditures",
  MonthlyExpendituresSchema
);

const filePath = path.join(
  __dirname,
  "..",
  "DS",
  "Data",
  "processed_data",
  "data_monthly_Aug22_Test.json"
);

fs.readFile(filePath, "utf-8", async (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const parsedData = JSON.parse(data);

  // Create instance
  const monthlyAug22 = {
    expenditures: parsedData.monthly_Aug22.Month_val.map(
      ([date, spending]) => ({
        date: new Date(date),
        spending,
      })
    ),
    totalSpending: parsedData.monthly_Aug22.Month_Sum,
    dailyAverage: parsedData.monthly_Aug22.Month_Avg,
    expenseCat: parsedData.monthly_Aug22.Month_Top5.map(
      ([category, spending]) => ({
        category,
        spending,
      })
    ),
  };

  try {
    // Remove all documents from the collection
    await MonthlyExpenditures.deleteMany({});

    // Save instance to MongoDB
    const monthlyExpendituresInstance = new MonthlyExpenditures(monthlyAug22);
    await monthlyExpendituresInstance.save();
    console.log("Monthly expenditures saved successfully!");
  } catch (err) {
    console.error("Error saving monthly expenditures", err);
  }
});
