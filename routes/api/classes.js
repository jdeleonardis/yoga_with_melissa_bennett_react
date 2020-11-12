const router = require("express").Router();
const classesController = require("../../controllers/classesController");

// Matches with "/api/classes"
router
    .route("/")    
    .get(classesController.findAllClasses)
    .post(classesController.createClass);

//   /api/classes/nextclasses
router
    .route("/nextclasses")
    .get(classesController.findClassesAfterNow);

// Matches with "/api/classes/:id"
 router
    .route("/:id")
    .put(classesController.updateClassAttendanceByID);    

//   /api/classes/update/:id
router
    .route("/update/:id")
    .put(classesController.updateClassByID);

//   /api/classes/participants/:id
router
    .route("/participants/:id")
    .put(classesController.updateClassParticipantsByID); 

module.exports = router;