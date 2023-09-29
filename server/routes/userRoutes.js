const express = require('express')
const { register, login, getUser, logout, loginGoogle, getUserById } = require('../controllers/userController')
const passport = require("../utils/passport")

const userRouter = express.Router()

userRouter.get('/current-user', getUser)
userRouter.get('/:id', getUserById)
userRouter.get('/logout',  logout)
userRouter.post('/register', register)
userRouter.post('/login/password', passport.authenticate('local'), login )
userRouter.get('/login/federated/google', passport.authenticate('google'))
userRouter.get('/login/google', passport.authenticate('google',{ failureRedirect:'/login'}), loginGoogle)

module.exports = userRouter 