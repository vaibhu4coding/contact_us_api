const express = require("express");
const i = 0;
const {handleClientCreation} = require("../controllers/clientController");
const router = express.Router();

router.post("/client-request", handleClientCreation);

module.exports = router;
