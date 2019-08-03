//
var clientModel = function( sequelize, Sequelize ){
	const Model = Sequelize.Model;
	class Client extends Model {}
	Client.init({
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name:{
			type: Sequelize.STRING,
			allowNull: false
		},
		phone:{
			type: Sequelize.STRING,
			allowNull: false
		},
		email:{
			type: Sequelize.STRING,
			allowNull: true
		},
		address:{
			type: Sequelize.STRING,
			allowNull: false
		},
		note:{
			type: Sequelize.STRING,
			allowNull: true
		}
	},{ sequelize, modelName:'client' });

	return Client;
};

module.exports = clientModel;