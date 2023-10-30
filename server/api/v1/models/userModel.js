import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = Schema({
    'name': {
        type: String,
    },
    'username': {
        type: String,
        required: true,
        unique: true,
    },
    'email': {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    'password': {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    this.confirmPassword = undefined
})

UserSchema.methods.matchPasswords = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = model('User', UserSchema)

export default User