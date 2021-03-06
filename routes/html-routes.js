// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var express = require("express");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/signout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signout.html"));
  });

//creates handlebars object with items and categories for use in rendering page. 
app.get("/main", function(req, res) {
  var handlebarsObj = {
    categories: {}
    ,items: {}
  };

  db.Category.findAll({}).then(function(dbCategory){
    handlebarsObj.categories = dbCategory;
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
    }).then(function(dbItem){
      handlebarsObj.items = dbItem;
      console.log("****************");
      console.log(JSON.stringify(handlebarsObj));
      res.render("index", handlebarsObj);
    });
  });
});

  app.post("/main", function(req, res){
    // reciec=ves the email from our clients post
    console.log("email to add = " + req.body.email);
    db.User.findOrCreate({
      where: {username: req.body.email}
    }).then(function(dbUser){
      console.log("dbUser: " + dbUser);
      res.render("index",{});
    });
    //check to see if email exsists
    //IF EXSISTS
      //render out handle bars page with user info
    //ELSE
      //create a new entry and render out handle bars page 
  })
/*
  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });
*/
};
