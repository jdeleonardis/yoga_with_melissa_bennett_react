const db = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {
    authenticateUser: function(req,res) {
        const { userid, password } = req.body;
        db.Owner.findOne({ userid }, function(err, user) {
          if (err) {
            console.error(err);
            res.status(500)
              .json({
              error: 'Internal error please try again'
            });
          } else if (!user) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
              });
          } else {
            user.isCorrectPassword(password, function(err, same) {
              if (err) {
                res.status(500)
                  .json({
                    error: 'Internal error please try again'
                });
              } else if (!same) {
                res.status(401)
                  .json({
                    error: 'Incorrect email or password'
                });
              } else {
                // Issue token
                const payload = { userid };
                const token = jwt.sign(payload, process.env.LOGIN_TOKEN_SECRET, {
                  expiresIn: '1d'
                });
             
                res.cookie('token', token, { httpOnly: false })
                  .sendStatus(200);
              }
            });
          }
        });
    },   

    verifyToken: function(req,res) {
        res.send('Success');
    }    
};