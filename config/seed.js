var db = require("../models");
module.exports = function(){
	//TEST DATA ONLY
  db.User.create({
  	username: "test@test.com"
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
    ,lent_out: true
  	,description: "DVD of the movie 'Oceans 13'"
  }).then(function(createResult){
  	console.log("created an Item");
  });

  db.Transaction.create({
    transaction_date: "2017/10/08 10:30:15"
  	,type:"LEND"
  	,item_condition:"pristine condition"
  	,lendee:"Joe the Dirtbag"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:1
  }).then(function(createResult){
  	console.log("created a Transaction");
  });
  db.Transaction.create({
    transaction_date: "2017/10/08 10:43:20"
  	,type:"RETURN"
  	,item_condition:"quite good"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:1
  }).then(function(createResult){
  	console.log("created a Transaction");
  });;
  db.Transaction.create({
    transaction_date: "2017/10/08 11:00:00"
  	,type:"LEND"
  	,item_condition:"scatched disc"
  	,lendee:"Jill the cutie"
  	,modifiedby_user_id: "root"
  	,UserId:1
  	,CategoryId:1
  	,ItemId:2
  }).then(function(createResult){
  	console.log("created a Transaction");
  });
  // .then(function(createResult){
  // 	console.log("created a Category");
  // }).then(function(){
  // 	db.Item.findAll({
  // 	include:[db.Transaction]
  // }).then(function(dbItem){});
  // });
}