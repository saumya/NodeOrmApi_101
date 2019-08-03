//
const project = (sequelize, Sequelize)=>{
	const Model = Sequelize.Model;

	class ProjectModel extends Model{}

	ProjectModel.init({
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name:{
			type: Sequelize.STRING,
			allowNull: false
		},
		details:{
			type: Sequelize.STRING,
			allowNull: false
		},
		client:{
			type: Sequelize.INTEGER,
			allowNull: false,
		}
	},{ sequelize, modelName: 'project' });


	return ProjectModel;
}

module.exports = project;