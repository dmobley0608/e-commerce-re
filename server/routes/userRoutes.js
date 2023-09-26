const express = require('express')
const { register, login, getUser, logout } = require('../controllers/userController')
const passport = require("../utils/passport")

const userRouter = express.Router()

userRouter.get('/', getUser)
userRouter.get('/logout',  logout)
userRouter.post('/register', register)
userRouter.post('/login/password', passport.authenticate('local'), login )

module.exports = userRouter