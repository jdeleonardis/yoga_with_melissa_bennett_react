const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhh';

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

module.exports = withAuth;