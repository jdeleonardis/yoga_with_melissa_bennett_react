const router = require("express").Router();
const classesRoutes = require("./classes");
const locationsRoutes = require("./locations");
const ownerRoutes = require("./owner");
const authenticateRoutes = require("./authenticate");
const withAuth = require('../../authmiddleware');


//Users routes
router.use("/classes", classesRoutes);
router.use("/locations", withAuth, locationsRoutes);
router.use("/owner", withAuth, ownerRoutes);
router.use("/authenticate", authenticateRoutes);
//router.use("/test", withAuth, authenticateRoutes);
router.use("/token", withAuth, authenticateRoutes);

module.exports = router;