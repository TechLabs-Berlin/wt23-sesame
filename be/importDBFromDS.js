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
const ExpenditureSchema = new mongoose.Schema({
  day: { type: String },
  spending: { type: Number },
});

const ExpenseCatSchema = new mongoose.Schema({
  category: { type: String },
  spending: { type: Number },
});

const ExpendituresSchema = new mongoose.Schema({
  expenditures: [ExpenditureSchema],
  totalSpending: { type: Number },
  dailyAverage: { type: Number },
  ExpenseCat: [ExpenseCatSchema],
});

// Create model
const Expenditures = mongoose.model("Expenditures", ExpendituresSchema);

const filePath = path.join(
  __dirname,
  "..",
  "DS",
  "Data",
  "processed_data",
  "data_weeklyview_Week35.json"
);

fs.readFile(filePath, "utf-8", async (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const parsedData = JSON.parse(data);

  // Create instance
  const week35 = {
    expenditures: parsedData.Week_35.Week_val.map(([day, spending]) => ({
      day,
      spending,
    })),
    totalSpending: parsedData.Week_35.Week_Sum,
    dailyAverage: parsedData.Week_35.Week_Avg,
    ExpenseCat: parsedData.Week_35.Week_Top5.map(([category, spending]) => ({
      category,
      spending,
    })),
  };

  try {
    // Remove all documents from the collection
    await Expenditures.deleteMany({});

    // Save instance to MongoDB
    const expendituresInstance = new Expenditures(week35);
    await expendituresInstance.save();
    console.log("Expenditures saved successfully!");
  } catch (err) {
    console.error("Error saving expenditures", err);
  }
});
