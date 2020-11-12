const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

// Matches with "/api/owner"
router
    .route("/")
    .post(ownerController.createOwner); 

module.exports = router;