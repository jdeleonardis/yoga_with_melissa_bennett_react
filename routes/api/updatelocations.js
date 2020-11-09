const router = require("express").Router();
const updateLocationsController = require("../../controllers/updateLocationsController");

//   /api/updatelocations
router
    .route("/")        
    .post(updateLocationsController.createLocation)    

//   /api/updatelocations/:id
router
    .route("/:id")
    .put(updateLocationsController.updateLocationByID);    

module.exports = router;