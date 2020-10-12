const db = require("../models");

module.exports = {
    createOwner: function(req,res) {
        const { userid, password } = req.body;
        const user =db.Owner({ userid, password });
        user.save(function(err) {
          if (err) {
            res.status(500)
              .send("Error registering new user please try again.");
          } else {
            res.status(200).send("New user created!");
          }
        });
    }
};