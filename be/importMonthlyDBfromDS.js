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
  month: { type: String },
  spending: { type: Number },
});

//please check this const value
const MonthlyExpenseCatSchema = new mongoose.Schema({
  category: { type: String },
  spending: { type: Number },
});

const MonthlyExpendituresSchema = new mongoose.Schema({
  expenditures: [MonthlyExpenditureSchema],
  totalSpending: { type: Number },
  MonthlyAverage: { type: Number },
  MonthlyExpenseCat: [monthlyExpenseCatSchema],
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
  "Monthly_View.json"
);

fs.readFile(filePath, "utf-8", async (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const parsedData = JSON.parse(data);

  // Create instance
  // please check this const value
  const monthlyView = {
    MonthlyExpenditures: parsedData.Monthly_View.Month_val.map(
      ([month, spending]) => ({
        month,
        spending,
      })
    ),
    totalSpending: parsedData.Monthly_View.Month_Sum,
    dailyAverage: parsedData.Monthly_View.Month_Avg,
    expenseCat: parsedData.Monthly_View.Month_Top5.map(
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
    const monthlyExpendituresInstance = new MonthlyExpenditures(Monthly_View);
    await monthlyExpendituresInstance.save();
    console.log("Monthly expenditures saved successfully!");
  } catch (err) {
    console.error("Error saving monthly expenditures", err);
  }
});
