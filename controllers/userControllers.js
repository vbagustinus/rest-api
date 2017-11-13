const User = require('../models').User
const bcrypt = require('bcrypt');

let getAllUsers = (req, res) => {
  User.findAll()
  .then(dataUsers=>{
    res.send(dataUsers)
  })
  .catch(err=>{
    console.log(err)
    res.send(err)
  })
}

let getUserById = (req, res) =>{
  User.findById(req.params.id)
  .then(dataUser=>{
    res.send(dataUser)
  })
  .catch(err=>{
    res.send(err)
  })
}

let createUser = (req, res) =>{
  // res.send(req.query)
  let input = req.body
  const saltRounds = 10;
  bcrypt.hash(input.password, saltRounds).then(function(hash) {
    User.create(
      {
        first_name : input.first_name,
        last_name : input.last_name,
        username : input.username,
        password : hash,
        isadmin : input.isadmin
      })
      .then(()=>{
        res.send('data Tersimpan')
      })
      .catch(err=>{
        res.send(err)
      })
  });
}

let deleteUser = (req, res) => {
  User.destroy(
  {
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.send('Terhapus')
  })
  .catch(err=>{
    res.send(err)
  })
}

let updateUser = (req, res) =>{
  let edit = req.body
  const saltRounds = 10;
  bcrypt.hash(edit.password, saltRounds).then(function(hash) {
    User.update(
      {
        first_name : edit.first_name,
        last_name : edit.last_name,
        username : edit.username,
        password : hash,
        isadmin : edit.isadmin
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(()=>{
        res.send('data Berhasil Di Ubah')
      })
      .catch(err=>{
        res.send(err)
      })
  })
}

let signinUser = (req, res) =>{
  let signin = req.body
  User.findOne({
    where: {
      username: signin.username
    }
  }).then((user) => {
    if(user){
      bcrypt.compare(signin.password, user.password)
      .then((result) => {
        if(result) {
          res.send('Password Benar')
        }else{
          res.send('Password atau username salah')
        }
      })
    }else{
      res.send('Password atau username salah')
    }
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  signinUser
}