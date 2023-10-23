import jwt from 'jsonwebtoken'
import User from "../models/userModel.js"
import { generateAuthToken, generateResetPasswordToken, sendEmail } from "../services/authServices.js"

export const login = async (request, response) => {
    const { email, password, rememberMe } = request.body

    const existingUser = await User.findOne({ email })

    if (existingUser && (await existingUser.matchPasswords(password))) {
        generateAuthToken(response, existingUser._id, rememberMe)

        response.status(200).json({
            'status': 'OK',
            'message': `Successfully logged in as ${existingUser.username}`
        })
    } else {
        response.status(400).json({
            'status': 'Error',
            'message': 'Invalid credentials.'
        })
        return
    }
}

export const register = async (request, response) => {
    const { username, email, password, confirmPassword } = request.body

    if (password !== confirmPassword) {
        response.status(400).json({
            'status': 'Error',
            'message': 'Passwords do not match.'
        })
        return
    }

    const existingUser = await User.findOne({ username })

    if (existingUser) {
        response.status(400).json({
            'status': 'Error',
            'message': 'This username is already taken.'
        })
        return
    }

    await User.create({
        'username': username,
        'email': email,
        'password': password
    })

    response.status(200).json({
        'status': 'OK',
        'message': 'Successfully registered your account.'
    })
}

export const forgotPassword = async (request, response) => {
    const { email } = request.body

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        response.status(400).json({
            'status': 'Error',
            'message': 'An account with this email does not exist.'
        })
        return
    }

    const expiresInMinutes = 10
    const token = generateResetPasswordToken(existingUser._id, expiresInMinutes)

    const subject = 'Reset password'
    const message = `Link is only valid for ${expiresInMinutes} minutes.<br><br>
                     Reset password link: http://localhost:3000/resetpassword/${token}<br>`

    sendEmail(email, subject, message)

    response.status(200).json({
        'status': 'OK',
        'message': 'Successfully sent reset password email.'
    })
}

export const resetPassword = async (request, response) => {
    response.status(200).json({
        'status': 'OK',
        'message': 'Success.'
    })
}

export const logout = async (request, response) => {
    response.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    response.status(200).json({
        'status': 'OK',
        'message': 'Successfully logged out.'
    })
}