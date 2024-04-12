const express = require("express");

const router = express();


router.get("/api", (request, response) => {
    return response.json({ message: "Olá camaradas" });
  });

module.exports = router