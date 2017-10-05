module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		username:{
			type:DataTypes.String
			,allowNull: false;
			,validate: {
				len:[5]
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
	});