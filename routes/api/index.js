const router = require("express").Router();
const classesRoutes = require("./classes");
//const locationsRoutes = require("./locations");
//const ownerRoutes = require("./owner");

//Users routes
router.use("/classes", classesRoutes);
//Story Templates routes
//router.use("/locations", locationsRoutes);
//Saved Stories routes
//router.use("/owner", ownerRoutes);

module.exports = router;