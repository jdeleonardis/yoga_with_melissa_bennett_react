const db = require("../models");

module.exports = {
  findAllLocations: function(req,res) {
    db.Locations.find({})      
      .sort({name:1})   
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }, 

  findAllActiveLocations: function(req,res) {
    db.Locations.find({"active": true})
      .sort({name:1})   
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  
  createLocation: function(req,res) {
    db.Locations.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },  
};