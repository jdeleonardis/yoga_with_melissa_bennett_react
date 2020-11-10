const router = require("express").Router();
const classesRoutes = require("./classes");
const updateLocationsRoutes = require("./updatelocations");
const locationsRoutes = require("./locations");
const ownerRoutes = require("./owner");
const authenticateRoutes = require("./authenticate");
const keysRoutes = require("./keys");
const createKeyTokenRoutes = require("./createkeytoken");
const withAuth = require('../../authmiddleware');


//Users routes
router.use("/classes", classesRoutes);
router.use("/updatelocations", withAuth.withAuth, updateLocationsRoutes);
router.use("/locations", locationsRoutes);
router.use("/owner", withAuth.withAuth, ownerRoutes);
router.use("/authenticate", authenticateRoutes);
//router.use("/test", withAuth, authenticateRoutes);
router.use("/token", withAuth.withAuth, authenticateRoutes);
router.use("/createkeytoken", createKeyTokenRoutes);
router.use("/keys", withAuth.getKeyAuth, keysRoutes);

module.exports = router;