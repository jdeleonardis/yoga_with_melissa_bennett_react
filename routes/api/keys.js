const router = require("express").Router();
const keysController = require("../../controllers/keysController");

// Matches with "/api/keys/map"
router
    .route("/map")
    .get(keysController.getMapKey);

// Matches with "/api/keys/emailjsuser"
router
    .route("/emailjsuser")
    .get(keysController.getEmailJSUser);

module.exports = router;