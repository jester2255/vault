var db = require("../models");
module.exports = function(app) {
	app.get("/api/transactions", function(req,res){
		db.Transaction.findAll({}).then(function(dbTransaction){
			res.json(dbTransaction);
		});
	});

	app.post("/api/transactions/:item", function(req,res){
		var transactionObj = {
			transaction_date: req.body.transaction_date
			,due_date: req.body.due_date
			,type: req.body.type
			,item_condition: req.body.item_condition
			,lendee: req.body.lendee
			,CategoryId: req.body.CategoryId
			,ItemId: req.body.ItemId
			,UserId: req.body.UserId
		}

		if (req.body.transactionType === "RETURN") {
			db.Item.update({lent_out:false},
				{	
					where:{
						id:req.params.id
					}
				}).then(function(dbItem){
					console.log("item lent_out updated",dbItem)
				}).then(db.Transaction.create(transactionObj).then(function(dbTransaction){
					dbTransaction
				}))
		}
		else if(req.body.transactionType === "LEND"){
			db.Item.update({lent_out:true},
				{	
					where:{
						id:req.params.id
					}
				}).then(function(dbItem){
					console.log("item lent_out updated",dbItem)
				}).then(db.Transaction.create(transactionObj).then(function(dbTransaction){
					dbTransaction
				}))
		}
	});
}