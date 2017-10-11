var db = require("../models");
module.exports = function(app) {

  //This default route pulls all Items from the items table with the category, and most recent transaction.
  app.get("/api/items", function(req, res) {
    db.Item.findAll({
      where:{UserId: 1}
      ,include: [{
        model: db.Transaction
        ,limit: 1
        ,order: [["transaction_date","DESC"]]
        ,attributes:["id","transaction_date","due_date","type","item_condition","lendee","ItemId","UserId"]
        }
        ,{
          model:db.Category
          ,attributes:["name","id"]
        }]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  //this route pulls one Item from the items table with the category, and most recent transaction.
  app.get("/api/items/:id", function(req, res) {
    db.Item.findOne({
      where:{UserId: 1, id:req.params.id}
      ,include: [{
        model: db.Transaction
        ,limit: 1
        ,order: [["transaction_date","DESC"]]
        ,attributes:["id","transaction_date","due_date","type","item_condition","lendee","ItemId","UserId"]
        }
        ,{
          model:db.Category
          ,attributes:["name","id"]
        }]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.post("/api/item", function(req, res) {
    var newItem = {
      name: req.body.name
      ,description: req.body.description
      ,lent_out: false
      ,CategoryId: req.body.CategoryId
      ,UserId: req.body.UserId
    };
    db.Item.create(newItem).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.delete("/api/Item/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};