const express = require('express');
const { AddUser, getAllUsers, DeleteDataUser, UpdateUsersData } = require('../Controllers/UserController');
const router = express.Router();

//Add a user
//@POST
router.post('/', AddUser )

//get all users
//@get
router.get('/', getAllUsers )

//Delete User
//@method: delete
router.delete('/:idd', DeleteDataUser )

//Update Data USer
//@method : put
router.put('/:id', UpdateUsersData )

module.exports= router