const jwt = require('jsonwebtoken');

const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  //if (!token) {
  if (token === undefined) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, process.env.LOGIN_TOKEN_SECRET, function(err, decoded) {
      if (err) {        
        res.status(401).send('Unauthorized: Invalid token');
      } else {
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
    jwt.verify(token, process.env.KEY_TOKEN_SECRET, function(err, decoded) {
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