require("dotenv").config();
require("./config/db.js");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const router = require("./routes/Router.js");

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 3077;

app.listen(PORT, async () => {
  
  console.log(`server running on port ${PORT} 🔥`);
  
});

