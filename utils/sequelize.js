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
function checkConnection(){
	sequelize
		.authenticate()
		.then(()=>{
			console.log('Sequelize:SUCCESS','Connection has been established successfully.');
		})
		.catch( error=>{
			console.log('Sequelize:ERROR','Unable to connect to the database',error);
		});	
}
//
module.exports = {checkConnection}






