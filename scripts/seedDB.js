const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yoga");

db.Owner.remove({})
  .then(() => db.Owner.create({ userid: "jtest@hotmail.com", password: "test" }))
  .then(data => {
    console.log(data)
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    //process.exit(1);
  });  

db.Locations.remove({})
  .then(() => db.Locations.create({
    name: "American Legion Post 138", 
    addr1: "218 Chub Lake St.",
    city: "Roxboro",
    state: "NC",
    zip: "27573",
    active: true }))
  .then(data => {
    console.log(data)
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    //process.exit(1);
  }); 
  
db.Classes.remove({})
  .then(() => db.Classes.create({
    dateStart: new Date("2020-09-10T17:00:00.000Z"),
    dateEnd: new Date("2020-09-10T18:00:00.000Z"),
    names: ["charles","donald","tim"],
    emailAddresses: ["ch@legion.com","do@legion.com","ti@legion.com"],
  }))
  .then(() => db.Classes.create({
    dateStart: new Date("2020-10-10T17:00:00.000Z"),
    dateEnd: new Date("2020-10-10T18:00:00.000Z"),
    names: ["charles","donald","tim"],
    emailAddresses: ["ch@legion.com","do@legion.com","ti@legion.com"],
  }))
  .then(() => db.Classes.create({
    dateStart: new Date("2020-11-10T17:00:00.000Z"),
    dateEnd: new Date("2020-11-10T18:00:00.000Z"),
    names: ["charles","donald","tim"],
    emailAddresses: ["ch@legion.com","do@legion.com","ti@legion.com"],
  }))    
  .then(data => {
    console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); 

  //process.exit(0);
