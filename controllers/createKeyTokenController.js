const db = require("../models");
const jwt = require('jsonwebtoken');

// const keySecret = process.env.KEY_TOKEN_SECRET;


module.exports = {
    createKeyToken: function(req,res) {     
        const { keys } = req.body; 
        const payload = { keys };
        const token = jwt.sign(payload, process.env.KEY_TOKEN_SECRET, {
          expiresIn: '1d'
        });
     
        res.cookie('keytoken', token, { httpOnly: false })
          .sendStatus(200);
    }
};