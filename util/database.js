const Sequelize = require('sequelize');

const  sequelize = new Sequelize('node-complete', 'root', 'Uk@palnati333', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;