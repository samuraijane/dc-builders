const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('danny', 'danny', null, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then( () => {
        console.log('Connection has been established successfully.');
        sequelize.close()
    }).catch( (err) => {
        console.error('Unable to connect to the database:', err);
    }) 
    
