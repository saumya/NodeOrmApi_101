//
/*
var User = function(){};
module.exports = User;
*/
/*
module.exports = (sequelize,type)=>{
	return sequelize.define('user',{
		id:{
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: type.STRING
	})
}
*/

//const Sequelize = require('sequelize');
//const Model = Sequelize.Model;

var userModel = function(sequelize,Sequelize){
	const Model = Sequelize.Model;

	class User extends Model{};
	User.init({
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		firstName:{
			type: Sequelize.STRING,
			allowNull: false
		},
		lastName:{
			type: Sequelize.STRING,
			allowNull: false
		},
		password:{
			type: Sequelize.STRING,
			allowNull: false
		}
	},{ sequelize, modelName:'user' });

	return User;
};

module.exports = {userModel};