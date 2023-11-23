import asyncHandler from "../middlewares/asyncHandler.js"
import User from "../models/userModel.js"
import {
    setExpiresInDays,
    setExpirationTimestamp,
    generateAuthToken,
    generateResetPasswordToken,
    sendEmail,
    verifyResetPasswordTokenAndGetUserId
} from "../services/authServices.js"

export const login = asyncHandler(async (request, response) => {
    const { email, password, rememberMe } = request.body

    const existingUser = await User.findOne({ email })

    if (existingUser && (await existingUser.matchPasswords(password))) {
        const { _id, username, email } = existingUser

        const expiresInDays = setExpiresInDays(rememberMe)
        const expirationTimestamp = setExpirationTimestamp(expiresInDays)

        generateAuthToken(response, _id, expiresInDays)

        response.status(200).json({
            'status': 'OK',
            'message': `Successfully logged in as ${username}`,
            'data': { _id, username, email, expirationTimestamp }
        })
    } else {
        response.status(400)
        throw new Error('Invalid credentials.')
    }
})

export const register = asyncHandler(async (request, response) => {
    const { username, email, password, confirmPassword } = request.body

    if (password !== confirmPassword) {
        response.status(400)
        throw new Error('Passwords do not match.')
    }

    const existingUser = await User.findOne({ username })

    if (existingUser) {
        response.status(400)
        throw new Error('This username is already taken.')
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
})

export const forgotPassword = asyncHandler(async (request, response) => {
    const { email } = request.body

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        response.status(400)
        throw new Error('An account with this email does not exist.')
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
})

export const resetPassword = asyncHandler(async (request, response) => {
    const token = request.params.token
    const { password, confirmPassword } = request.body

    if (password !== confirmPassword) {
        response.status(400)
        throw new Error('Passwords do not match.')
    }

    const userId = verifyResetPasswordTokenAndGetUserId(token)

    const existingUser = await User.findOne({ _id: userId })

    existingUser.password = password
    existingUser.save()

    response.status(200).json({
        'status': 'OK',
        'message': 'Successfully reset your password.'
    })
})

export const logout = asyncHandler(async (request, response) => {
    response.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    response.status(200).json({
        'status': 'OK',
        'message': 'Successfully logged out.'
    })
})