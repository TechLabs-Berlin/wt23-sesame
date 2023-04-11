const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//Should it be /pages/account/accounts
app.post("/components/LogIn", async (req, res) => {
  const { username, password } = req.body;

  const user = new User({
    username,
    password: bcrypt.hashSync(password, 10),
  });

  try {
    await user.save();
    res.json({ message: "User logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//please help me with the path
app.post("/src/pages/account/Account", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Incorrect username or password" });
  }

  const token = jsonwebtoken.sign({ username: user.username }, "secret");

  res.json({ token });
});

//port 3000 or 4000 ?
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
