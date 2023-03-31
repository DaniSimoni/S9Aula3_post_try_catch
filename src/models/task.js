const connection = require('../database');
const { Sequelize } = require('sequelize');

const Task = connection.define('task', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    description:{
        type: Sequelize.STRING,
        allowNull: true,
    },

})

module.exports = Task;