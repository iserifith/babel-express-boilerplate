import express from "express";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";
import { sequelize } from "./src/models"

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

const PORT = process.env.PORT || 4450;

sequelize.sync({
	pool: {
		max: 5,
		min: 0,
		idle: 5000,
		acquire: 20000,
		evict: 30000,
		handleDisconnects: true,
	}
}).then(() => {
	app.listen(port, () => {
		console.log("Server started on port " + port);
	});
});
