var express = require('express');
var router = express.Router();

// dependencies
const { connCheck, createTables, getUserModel } = require('../utils/sequelize')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Act API | 0.1.0' });
});
//
router.get('/ormCheck',function(request,response,next){
	const result = connCheck();
	response.send('Checked');
});
router.get('/createTables',function(request,response,next){
	createTables();
	response.send('createTables: done');
});
//
module.exports = router;
