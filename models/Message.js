const db = require('../config/db');
const Sequelize = require('sequelize');

const message = db.define('messages', {
  id_message: {
    type: Sequelize.INTEGER,
    autoIcrement: true,
    primaryKey: true
  },
  id_user: {
    type: Sequelize.INTEGER,
    notNull: true
  },
  content: {
    type: Sequelize.TEXT,
    notNull: true
  }
}, {
  timestamps: false
})

module.exports = message