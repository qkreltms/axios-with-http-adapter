const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3333;

app.post("/", (req, res) => {
  res.send({ message: "something" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
