import { Schema, model } from 'mongoose'

const UserSchema = Schema({
    'name': {
        type: String,
    },
    'username': {
        'type': String,
        'required': true,
        'unique': true,
    },
    'email': {
        type: String,
        required: true,
        match: '/.+\@.+\..+/',
        unique: true
    },
    'password': {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = model('User', UserSchema)

export default User