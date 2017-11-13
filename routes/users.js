var express = require('express');
var router = express.Router();
const User =  require('../controllers/userControllers')

/* GET users listing. */
router.get('/', User.getAllUsers);
router.get('/:id', User.getUserById);
router.post('/', User.createUser);
router.delete('/:id', User.deleteUser);
router.put('/:id', User.updateUser);
router.post('/login', User.signinUser);

module.exports = router;
