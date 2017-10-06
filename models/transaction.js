module.exports = function(sequelize, DataTypes){
	var Transaction = sequelize.define("Transaction", {
		transaction_date: {
			type: DataTypes.DATE
			,defaultValue: sequelize.NOW
		},
		due_date: {
			type: DataTypes.DATE
			// ,defaultValue: sequelize.NOW + 700000000
		},
		type:{
			type: DataTypes.ENUM
			,values: ['LEND','RETURN']
			,allowNull: false
		},
		item_condition: {
			type: DataTypes.TEXT
		},
		lendee: {
			type: DataTypes.STRING
			,allowNull: false
		},
		//WhoAudit fields below. 
		modifiedby_user_id:{
			type:DataTypes.STRING
			,allowNull: false
		}//timestamps input automatically by Sequelize. 
		// created_date:{
		// },
		// modified_Date:{
		// }
	});

	// Transaction.associate = function(models){
	// 	Transaction.belongsTo(models.User, {
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	// 	});
	// }

	Transaction.associate = function(models){
		Transaction.belongsTo(models.Item, {
			foreignKey: {
				allowNull: false
			}
		});
	}

	return Transaction;
}
