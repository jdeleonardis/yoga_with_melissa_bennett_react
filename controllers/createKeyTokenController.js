const db = require("../models");
const jwt = require('jsonwebtoken');

const keySecret = 'keysecretshhh';

module.exports = {
    createKeyToken: function(req,res) {     
        const { keys } = req.body; 
        const payload = { keys };
        const token = jwt.sign(payload, keySecret, {
          expiresIn: '1d'
        });
     
        res.cookie('keytoken', token, { httpOnly: false })
          .sendStatus(200);
    }
};