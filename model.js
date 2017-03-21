var Sequelize = require("sequelize");


module.exports = function(sequelize) {

    var Customer = sequelize.define("Clientes", {

        NITCLIE : Sequelize.STRING,
        NOMCLIE : Sequelize.STRING

    });

    Customer.removeAttribute('id');

    return {
        Customer : Customer
    }

}