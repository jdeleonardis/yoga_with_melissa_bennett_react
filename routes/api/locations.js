const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

//   /api/locations
router
    .route("/")    
    .get(locationsController.findAllLocations)
    .post(locationsController.createLocation)    

//   /api/locations/:id
router
    .route("/:id")
    .put(locationsController.updateLocationByID);    

//   /api/locations/active
router
    .route("/active")
    .get(locationsController.findAllActiveLocations);


module.exports = router;