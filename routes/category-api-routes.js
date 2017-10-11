var db = require("../models");
module.exports = function(app) {
	app.get("/api/categories", function(req,res){
		db.Category.findAll({}).then(function(dbCategory){
			res.json(dbCategory);
		});
	});

	app.post("/api/categories", function(req, res){
		db.Category.create({
			name:req.body.name
			,UserId: 1
		}).then(function(dbCategory){
			res.redirect("/main");
		});
	});
}