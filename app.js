const express = require("express");
const app = express();

const v1Router = require("./routes/v1/router");
const v2Router = require("./routes/v2/router");
app.use("/v1", v1Router);
app.use("/v2", v2Router);

app.get("/", (req, res) => {
	res.send({"status": "ok"});
});

app.listen(5000, () => {
	console.log("server is started");
});
