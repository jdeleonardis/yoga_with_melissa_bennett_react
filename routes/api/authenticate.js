const router = require("express").Router();
const authenticateController = require("../../controllers/authenticateController");

// Matches with "/api/authenticate"
router
    .route("/")
    .post(authenticateController.authenticateUser)

router
    .route("/token")
    .get(authenticateController.verifyToken);

module.exports = router;