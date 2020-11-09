const db = require("../models");

module.exports = {
    getMapKey: function(req,res) {
        res.json(process.env.POSITIONSTACK_API)
    }
};