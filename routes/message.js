var models = require('../models');


exports.send = function(req, res) {
	var email = req.body.email;
	var content = req.body.content;
	var created = Date.now();

    var savedPost = new models.Message({
    	"email": email,
    	"content": content,
    	"created": created
    });

    savedPost.save(saved);

    function saved(err) {
    	if(err) {
    		console.log(err);
    		res.send(500);
    		return;
    	}
    	res.redirect('/');
    }
};
