//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('edutech', 'root', 'mukund19', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize.authenticate().then(function (err) {
    if (err) {
        console.log('There is connection ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});

//Create Item Table Structure
var Item = sequelize.define('Item', {    
    name:Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.DATE
});

export function createTable(){
    //Applying Item Table to database
sequelize.sync({force:true}).then(function (err) {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');
    }
});
}
