module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		username:{
			type:DataTypes.STRING
			,allowNull: false
			,validate: {
				len:[5]
			}
		},//WhoAudit fields below. 
		modifiedby_user_id:{
			type:DataTypes.STRING
			,allowNull: false
		}//timestamps input automatically by Sequelize. 
		// created_date:{
		// },
		// modified_Date:{
		// }
	});

	User.associate = function(models){
		User.hasMany(models.Item,{});
		User.hasMany(models.Transaction,{});
		User.hasMany(models.Category,{});
	}
	
	return User;
}