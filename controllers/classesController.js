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
    // console.log(req.body.dateStart)
    // console.log(req.body.dateEnd)
    // const start = new Date(req.body.dateStart.toLocaleString("en-US", {timeZone: 'UTC' })).toISOString().slice(0,19)
    // const end = new Date(req.body.dateEnd.toLocaleString("en-US", {timeZone: 'UTC' })).toISOString().slice(0,19)
    // console.log(start)
    // console.log(end)

    // req.body.dateStart = start
    // req.body.dateEnd = end

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

//   createUser: function(req, res) {
//     db.Users.create(req.body)  //need to be destructured?  ({ userid: req.body.userid, password: req.body.password })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
//   findUserById: function(req, res) {
//     db.Users.findById({ _id: req.params.id })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },  
//   updateUser: function(req, res) {
//     db.Users.findOneAndUpdate({ _id: req.params.id }, req.body) //same as insert - need to be destructured?
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   removeUser: function(req, res) {
//     db.Users.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },  
//   findTemplatesByUser: function(req, res) {
//     db.Users.find({ userid: req.params.userid })
//       .populate({path: 'storytemplates', options: { sort: { 'title': 1 } } })
//       .then(dbModel => res.json(dbModel))      
//       .catch(err => res.status(422).json(err));
//   },  
//   findSavedStoriesByUser: function(req, res) {
//     db.Users.find({ _id: req.params.id })
//       .populate("savedstories")
//       .then(dbModel => res.json(dbModel))      
//       .catch(err => res.status(422).json(err));
//   }
};