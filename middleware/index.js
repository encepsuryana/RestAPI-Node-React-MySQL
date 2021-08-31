const express = require("express");
const auth = require("./auth");
const router = express.Router();

router.post("/api/v1/register", auth.registration);

module.exports = router;
