var express = require('express');
var router = express.Router();
const userCntrl = require('../controllers/user')
const userDetails = require('../controllers/userDetails')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// create new user
router.post('/createUsers',userCntrl.createUser)
router.post('/register',userDetails.createUserDetials)

module.exports = router;
