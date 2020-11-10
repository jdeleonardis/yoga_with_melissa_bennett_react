const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhh';
const keySecret = 'keysecretshhh';

const withAuth = function(req, res, next) {
  //console.log(req.cookies.token)
  const token = req.cookies.token;
  //if (!token) {
  if (token === undefined) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {        
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        //res.status(200).send('Success middleware');
        // console.log(decoded.email)
        // req.email = decoded.email;
        next();
      }
    });
  }
}

const getKeyAuth = function(req, res, next) {
  const token = req.cookies.keytoken;  
  if (token === undefined) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, keySecret, function(err, decoded) {
      if (err) {        
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        next();
      }
    });
  }
}

module.exports = {
  withAuth,
  getKeyAuth
}