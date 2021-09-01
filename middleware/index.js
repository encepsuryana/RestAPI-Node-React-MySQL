const express = require("express");
const auth = require("./auth");
const verification = require("./verification");
const router = express.Router();

router.post("/api/v1/register", auth.registration);
router.post("/api/v1/login", auth.login);

//address authirized
router.get("/api/v1/secret-page", verification(), auth.pageSecret);

module.exports = router;
