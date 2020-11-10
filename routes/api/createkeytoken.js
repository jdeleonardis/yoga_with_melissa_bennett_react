const router = require("express").Router();
const createKeyTokenController = require("../../controllers/createKeyTokenController");

// Matches with "/api/createkeytoken"
router
    .route("/")
    .post(createKeyTokenController.createKeyToken);

module.exports = router;