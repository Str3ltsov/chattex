import User from "../models/userModel.js"

export const login = async (request, response) => {
    response.status(200).json({
        'status': 'OK',
        'message': 'Success.'
    })
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
        'status': 'Success',
        'message': 'Success registered your account.'
    })
}

export const forgotPassword = async (request, response) => {
    response.status(200).json({
        'status': 'OK',
        'message': 'Success.'
    })
}

export const resetPassword = async (request, response) => {
    response.status(200).json({
        'status': 'OK',
        'message': 'Success.'
    })
}

export const logout = async (request, response) => {
    response.status(200).json({
        'status': 'OK',
        'message': 'Success.'
    })
}