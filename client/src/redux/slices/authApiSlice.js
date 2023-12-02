import { apiSlice } from "./apiSlice.js"
import {
    AUTH_LOGIN_URL,
    AUTH_REGISTER_URL,
    AUTH_FORGOT_PASSWORD_URL,
    AUTH_RESET_PASSWORD_URL
} from '../../helpers/Constants.js'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: data => ({
                url: `${AUTH_LOGIN_URL}`,
                method: 'POST',
                body: data
            }),
            providesTags: ['User']
        }),
        register: builder.mutation({
            query: data => ({
                url: `${AUTH_REGISTER_URL}`,
                method: 'POST',
                body: data
            }),
            providesTags: ['User']
        }),
        forgotPassword: builder.mutation({
            query: data => ({
                url: `${AUTH_FORGOT_PASSWORD_URL}`,
                method: 'POST',
                body: data
            }),
            providesTags: ['User']
        }),
        resetPassword: builder.mutation({
            query: ({ resetPasswordToken, password, confirmPassword }) => ({
                url: `${AUTH_RESET_PASSWORD_URL}/${resetPasswordToken}`,
                method: 'PATCH',
                body: { password, confirmPassword }
            }),
            providesTags: ['User']
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation
} = authApiSlice