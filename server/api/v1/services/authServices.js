import jwt from "jsonwebtoken"
import nodemailer from 'nodemailer'

export const generateAuthToken = (response, userId, rememberMe = false) => {
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

export const generateResetPasswordToken = (userId, expiresInMinutes) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: 60 * expiresInMinutes })
}

export const sendEmail = (toEmail, subject, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        secureConnection: process.env.NODE_ENV === 'production',
        auth: {
            user: process.env.MAILER_EMAIL,
            pass: process.env.MAILER_PASSWORD
        },
        tls: {
            rejectUnauthorized: true
        }
    })

    const mailOptions = {
        from: process.env.MAILER_EMAIL,
        to: toEmail,
        subject: subject,
        html: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({
                'status': 'Error',
                'message': error.stack
            })
        } else {
            console.info(`Mail has been sent: ${info.response}`)
        }
    })
}