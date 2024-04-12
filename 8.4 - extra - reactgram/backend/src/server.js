require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const router = require("./routes/Router.js");

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3077;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} 🔥`);
});

