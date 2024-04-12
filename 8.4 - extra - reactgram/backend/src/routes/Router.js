const express = require("express");

const router = express();

router.use("/api/users", require("./UserRoutes"));


router.get("/api", (request, response) => {
    return response.json({ message: "Olá camaradas" });
  });

module.exports = router