const db = require("../models");

module.exports = {
  findClassesAfterNow: function(req,res) {
    const d = new Date();
    const nowDate = new Date(d.toISOString());    
    db.Classes.find({
         dateStart: { $gte: nowDate },
         cancelled: false
      })      
      .populate("location")
      .limit(3)
      .sort({dateStart:1})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  findAllClasses: function(req,res) {
    db.Classes.find({})  
      .populate("location")    
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },  

  createClass: function(req,res) {
    db.Classes.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },  

  updateClassAttendanceByID: function(req,res) {
    db.Classes.findOneAndUpdate({ _id: req.params.id }, { $push: {names: req.body.name, emailAddresses: req.body.email } }, { new: true })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  updateClassParticipantsByID: function(req,res) {
    db.Classes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  updateClassByID: function(req,res) {
    db.Classes.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }  
};