var db = require("../models");
module.exports = function(app) {
  app.get("/api/items", function(req, res) {
    db.Item.findAll({
      where:{UserId: 1}
      ,include: [{model: db.Transaction}]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // app.get("/api/items", function(req, res) {
  //   db.Item.findAll({
  //     where:{UserId: 1}
  //     ,include: [{
  //       model: db.Transaction
  //     }]
  //   }).then(function(dbItem) {
  //     res.json(dbItem);
  //   });
  // });

  app.get("/api/items/:id", function(req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      },
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