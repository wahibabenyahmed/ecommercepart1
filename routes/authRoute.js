const express = require ('express');
const { createUser, loginUseCtrl, getallUser, getaUser, deleteaUser, updateUser } = require('../controller/userCtrl');
const router = express.Router();


router.post("/register", createUser);
router.post("/login", loginUseCtrl);
router.get('/all-users',getallUser);
router.get('/:id', getaUser);
router.delete('/:id', deleteaUser);
router.put('/:id', updateUser);
module.exports = router;
