import express from 'express'
import { forgotPassword, login, logout, register, resetPassword } from '../controllers/authController.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/forgotpassword', forgotPassword)
router.patch('/resetpassword/:token', resetPassword)
router.post('/logout', logout)

export default router