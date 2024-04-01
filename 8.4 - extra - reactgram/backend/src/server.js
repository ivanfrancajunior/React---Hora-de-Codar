const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 3077;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} 🔥`);
});

app.get("/api", (request, response) => {
  return response.json({ message: "Olá camaradas 👩" });
});
