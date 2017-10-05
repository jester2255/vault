module.exports = function(sequelize, DataTypes){
	var Category = sequelize.define("User", {
		name:{
			type:DataTypes.String
			,allowNull: false;
			,validate: {
				len:[1]
			}
		},//WhoAudit fields below. 
		modifiedby_user_id:{
			type:DataTypes.String
			,allowNull: false
		}//timestamps input automatically by Sequelize. 
		// created_date:{
		// },
		// modified_Date:{
		// }

		Category.associate = function(models){
			Category.hasMany(models.Item,{});
		}
	});