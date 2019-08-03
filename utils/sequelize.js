// Bootstrap ORM

const Sequelize = require('sequelize');

const database = 'node_app_001';
const username = 'nodeApp';
const password = 'nodeAppPw';
const host = 'localhost';
const port = 8889;
const dialect = 'mysql';

//const sequelize = new Sequelize('mysql://nodeApp:nodeAppPw@localhost:8889/node_app_001');
//const sequelize = new Sequelize( database, username, password, { host:host, port:port, dialect:dialect } );
const sequelize = new Sequelize( database, username, password, { 
	host:host,
	port:port, 
	dialect:dialect,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	} 
});
//

/*
const userModel  = require('../models/user.model');
const UserModel = userModel(sequelize,Sequelize);
*/
const UserModel = require('../models/user.model')(sequelize,Sequelize);

/*
// Test the connection
//sequelize.authenticate().then(()=>{}).catch( err=>{});
sequelize
	.authenticate()
	.then(()=>{
		console.log('Sequelize:SUCCESS','Connection has been established successfully.');
	})
	.catch( error=>{
		console.log('Sequelize:ERROR','Unable to connect to the database',error);
	});
*/

//
function connCheck(){
	sequelize
		.authenticate()
		.then(()=>{
			console.log('======================================================');
			console.log('Sequelize:SUCCESS');
			console.log('Connection has been established successfully.');
			console.log('======================================================');
		})
		.catch( error=>{
			console.log('======================================================');
			console.log('Sequelize:ERROR. Unable to connect to the database');
			console.log(error);
			console.log('======================================================');
		});	
}
function createTables(){
	// Sync all models that aren't already in the database
	// sequelize.sync()

	sequelize.sync({force:true}).then(function(){
		console.log('SUCCESS:createTables');
	}).catch(function(error){
		console.log('ERROR:createTables');
		console.log(error);
	});
}
//
function connClose(){
	sequelize.close();
}
//
function getUserModel(){
	//var UserModel = userModel(sequelize,Sequelize);
	//
	UserModel.sync({force:false}).then(function(){
		console.log('UserModel Sync Done!');
	}).catch(function(error){
		console.log('ERROR');
		console.log(error)
	});

	console.log(UserModel);
	return UserModel;
}
 
//
module.exports = { 
					connCheck, 
					connClose, 
					createTables,
					getUserModel
				};






