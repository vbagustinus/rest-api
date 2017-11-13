require('dotenv').config()
var jwt = require('jsonwebtoken');

let isLogin = (req, res, next) =>{

  let token = req.headers.token
  // verify a token symmetric
  console.log(token)
  jwt.verify(token, 'inirahasiamu', function(err, decoded) {
    if(!err){
      req.decoded = decoded
      next()
    } else {
      res.send(err)
    }
  });
}

let isAdmin = (req, res, next) =>{
  console.log(req.decoded)
  if(req.decoded.isadmin){next()}
  else {res.send('Anda Bukan Admin')}
}

module.exports = {
  isLogin,
  isAdmin
}