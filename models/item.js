module.exports = function(sequelize, DataTypes){
	var Item = sequelize.define("User", {
		name:{
			type:DataTypes.String
			,allowNull: false;
			,validate: {
				len:[1]
			}
		},
		description: {
			type:DataTypes.TEXT
			,allowNull:true
		},
		lent_out: {
			type: DataTypes.BOOLEAN
			,allowNull: false
		},
		//WhoAudit fields below. 
		modifiedby_user_id:{
			type:DataTypes.String
			,allowNull: false
		}//timestamps input automatically by Sequelize. 
		// created_date:{
		// },
		// modified_Date:{
		// }
	});

	Item.associate = function(models){
		Item.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});

	Item.associate = function(models){
		Item.belongsTo(models.Category, {
			foreignKey: {
				allowNull: false
			}
		});
	}