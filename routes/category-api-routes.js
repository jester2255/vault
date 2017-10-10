var db = require("../models");
module.exports = function(app) {
	app.get("/api/categories", function(req,res){
		db.Category.findAll({}).then(function(dbCategory){
			res.json(dbCategory);
		});
	});
}