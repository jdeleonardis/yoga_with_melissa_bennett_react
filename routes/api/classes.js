const router = require("express").Router();
const classesController = require("../../controllers/classesController");

// Matches with "/api/classes"
// router
//     .route("/")
//     .get(classesController.findClassesAfterNow)
//     .get(classesController.findAllClasses)
//     .post(classesController.createClass);

// router
//     .route("/allclasses")
//     .get(classesController.findAllClasses);

//   /api/classes
router
    .route("/")    
    .get(classesController.findAllClasses)
    .post(classesController.createClass);

//   /api/classes/nextclasses
router
    .route("/nextclasses")
    .get(classesController.findClassesAfterNow);

// // Matches with "/api/users"
// router
//     .route("/")
//     //.route("/users")  //I *think* the users part gets tacked in in index.js in the same dir
//     .post(usersController.createUser);

// Matches with "/api/classes/:id"
 router
    .route("/:id")
//     .get(usersController.findUserById)  
    .put(classesController.updateClassAttendanceByID);    
//     .delete(usersController.removeUser);

// // Matches with "/api/users/templates/:id"
// router
//     .route("/templates/:userid")  
//     //.route("/users/templates/:userid")  
//     .get(usersController.findTemplatesByUser);  

// // Matches with "/api/users/stories/:id"
// router
//     .route("/stories/:id")  
//     //.route("/users/stories/:id")  
//     .get(usersController.findSavedStoriesByUser);   

module.exports = router;