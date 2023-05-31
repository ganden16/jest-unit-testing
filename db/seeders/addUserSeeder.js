const bcrypt = require("bcryptjs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: "Alvin Dian",
				email: 'alvin@binar.co.id',
				encryptedPassword: bcrypt.hashSync('123456', 10),
				roleId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Joko Widodo",
				email: 'joko@binar.co.id',
				roleId: null,
				encryptedPassword: bcrypt.hashSync('123456', 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users');
	}
};