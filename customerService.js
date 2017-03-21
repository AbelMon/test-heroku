module.exports = function(sequelize) {
      var model = require("./model")(sequelize);
      var Customer = model.Customer;

      return {

        get: function (req, res) {
            Customer.findAll().then(function (customers) {

                var jsonObject = {
                    customers: customers
                }

                res.send(jsonObject);
            });
            
        }
    };
};
