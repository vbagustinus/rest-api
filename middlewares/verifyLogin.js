require('dotenv').config()
var jwt = require('jsonwebtoken');

let isLogin = (req, res, next) =>{
  let token = req.header.dataToken
  // verify a token symmetric
  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
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