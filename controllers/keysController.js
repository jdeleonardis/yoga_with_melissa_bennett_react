const db = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {
    getMapKey: function(req,res) {
        res.json(process.env.OPENCAGEDATA_API)
    },

    getEmailJSUser: function(req,res) {
        res.json(process.env.EMAILJS_USER)
    }
};