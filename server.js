var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var helmet = require('helmet');
//var utils = require('./utilities/Authentication');
var app = express();
var port = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser());

var sequelize = new Sequelize( "VENTAS" , "dbuser", "appsisc2017mssql", {
    host: "192.168.1.24",
    port: 1433,
    dialect: "mssql",
    
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        idle: 10000
  },

});

var customerService = require("./customerService")(sequelize);


//sync the model with the database
sequelize.sync().then(function (err) {
    app.get("/customers", customerService.get);
    app.listen(port);
    console.log("Port listen at " + String(port));
});


