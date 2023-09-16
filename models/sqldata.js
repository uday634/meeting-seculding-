const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const MeetingData = sequelize.define('MeetData', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, 
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  time: Sequelize.STRING,
});

module.exports = MeetingData;
