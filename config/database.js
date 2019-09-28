const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});
