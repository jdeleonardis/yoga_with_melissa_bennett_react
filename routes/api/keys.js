const router = require("express").Router();
const keysController = require("../../controllers/keysController");

// Matches with "/api/keys/map"
router
    .route("/map")
    .get(keysController.getMapKey);

module.exports = router;