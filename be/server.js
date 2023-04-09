const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://<database>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("mydatabase").collection("mycollection");
  client.close();
});

client.connect((err) => {
  const collection = client.db("mydatabase").collection("mycollection");
  collection.find({}).toArray(function (err, data) {
    // serve data to frontend
  });
  client.close();
});
client.connect((err) => {
  const collection = client.db("mydatabase").collection("mycollection");
  collection.find({}).toArray(function (err, data) {
    app.get("/api/mydata", (req, res) => {
      res.json(data);
    });
  });
  client.close();
});
app.listen(3001, () => console.log("Server running on port 3001"));
