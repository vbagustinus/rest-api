var express = require('express');
var router = express.Router();
const User =  require('../controllers/userControllers')
const verifyLogin = require('../middlewares/verifyLogin')

/* GET users listing. */
router.get('/users', verifyLogin.isLogin, verifyLogin.isAdmin, User.getAllUsers);
router.get('/users/:id', verifyLogin.isLogin, User.getUserById);
router.post('/users', verifyLogin.isLogin, verifyLogin.isAdmin, User.createUser);
router.delete('/users/:id', verifyLogin.isLogin, verifyLogin.isAdmin, User.deleteUser);
router.put('/users/:id', verifyLogin.isLogin, User.updateUser);
router.post('/signin', User.signinUser);
router.post('/signup', User.signupUser);

module.exports = router;
