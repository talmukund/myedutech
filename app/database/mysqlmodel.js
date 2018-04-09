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
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.DATE
});

export function createTable() {
    return new Promise((resolve, reject) => {
        Item.findAll().then(result => {
            // console.log(result);
            resolve(result);
        })
    })
}
