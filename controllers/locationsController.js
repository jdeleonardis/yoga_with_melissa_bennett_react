const db = require("../models");

module.exports = {
  findAllLocations: function(req,res) {
    db.Locations.find({})      
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }, 

  findAllActiveLocations: function(req,res) {
    db.Locations.find({"active": true})      
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }       
};