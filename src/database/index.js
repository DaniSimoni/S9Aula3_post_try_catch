const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '1234',
    database: 'tarefas_database',
    define: {
        timestamps: true,
        underscores: true,
        endercoresAll: true,
    },

})

module.exports = connection;