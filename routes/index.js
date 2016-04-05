var models = require('../models');

exports.view = function(req, res) {
	models.Message.find().sort('-date').exec(displayPosts);

	function displayPosts(err, posts) {
		if(err) {
			console.log(err);
			res.send(500);
			return;
		}
	    res.render("index", {data: posts});
	}
}
