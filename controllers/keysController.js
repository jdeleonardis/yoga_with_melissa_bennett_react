const db = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {
    getMapKey: function(req,res) {
        res.json(process.env.POSITIONSTACK_API)
    }
};