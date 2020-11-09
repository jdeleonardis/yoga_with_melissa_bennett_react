const db = require("../models");

module.exports = { 
  createLocation: function(req,res) {
    db.Locations.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },  

  updateLocationByID: function(req,res) {
    db.Locations.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }  
};