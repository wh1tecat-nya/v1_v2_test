const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
	res.send({
		status: "ok",
		message:"this is v2 info"
	});
});

module.exports = router;
