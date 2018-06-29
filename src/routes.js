import UserController from "./controllers/UserController";

module.exports = app => {
	app.get("/", (req, res) => {
		res.json({
			message: "Online"
		});
	});

	app.post('/login', UserController.login);


};
