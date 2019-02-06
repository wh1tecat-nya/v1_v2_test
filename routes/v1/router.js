const express = require("express");
const router = express.Router();

const infoRouter = require("./info/info");
router.use("/info", infoRouter);

module.exports = router;
