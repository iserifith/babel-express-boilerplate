import db from '../models';

const User = db.User;

exports.login = (req, res) => {
	const user = {
		username: req.params.username,
		password: req.params.password
	}
}