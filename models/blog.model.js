//
//module.exports = ()=>{}

module.exports = (sequelize,Sequelize)=>{
	
	const Model = Sequelize.model;
	
	class Blog extends model{};
	
	Blog.init({
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title:{ type: Sequelize.STRING },
		text:{ type: Sequelize.STRING }
	},{ sequelize, modelName: 'blog' });

	return Blog;
}