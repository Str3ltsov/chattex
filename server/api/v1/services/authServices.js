import jwt from "jsonwebtoken"

export const generateToken = (response, userId, rememberMe = false) => {
    let expiresInDays = 1

    if (rememberMe) {
        expiresInDays = 30
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: `${expiresInDays}d` })

    response.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: expiresInDays * 24 * 60 * 60 * 1000
    })
}