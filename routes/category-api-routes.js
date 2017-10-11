var db = require("../models");
module.exports = function(app) {
	app.get("/api/categories", function(req,res){
		db.Category.findAll({}).then(function(dbCategory){
			res.json(dbCategory);
		});
	});

	app.post("/api/categories", function(req,res){
		db.Category.create({
			name:req.name
		});
	}).then(function(dbCategory){
	});
}