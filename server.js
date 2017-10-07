// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory

// app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

	//TEST DATA ONLY
  db.User.create({
  	username: "RyanTest"
  	,modifiedby_user_id:"root"
  }).then(function(createResult){
  	console.log("created a user");
  });

  db.Category.create({
  	name:"DVDs"
  	,modifiedby_user_id: "root"
  	,UserId:1
  }).then(function(createResult){
  	console.log("created a Category");
  });  

  db.Item.create({
  	name:"The Incredibles"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,description: "DVD of the movie 'The Incredibles', two disc pack."
  }).then(function(createResult){
  	console.log("created an Item");
  });
  
  db.Item.create({
  	name:"Oceans 13"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,description: "DVD of the movie 'Oceans 13'"
  }).then(function(createResult){
  	console.log("created an Item");
  });

  db.Transaction.create({
  	type:"LEND"
  	,item_condition:"pristine condition"
  	,lendee:"Joe the Dirtbag"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:1
  }).then(function(createResult){
  	console.log("created a Category");
  });
  db.Transaction.create({
  	type:"RETURN"
  	,item_condition:"quite good"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:1
  }).then(function(createResult){
  	console.log("created a Category");
  });;
  db.Transaction.create({
  	type:"LEND"
  	,item_condition:"scatched disc"
  	,lendee:"Jill the cutie"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:2
  }).then(function(createResult){
  	console.log("created a Category");
  });
  // .then(function(createResult){
  // 	console.log("created a Category");
  // }).then(function(){
  // 	db.Item.findAll({
  // 	include:[db.Transaction]
  // }).then(function(dbItem){});
  // });

  
});