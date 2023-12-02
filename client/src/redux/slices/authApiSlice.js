import { apiSlice } from "./apiSlice.js"
import { AUTH_LOGIN_URL, AUTH_REGISTER_URL } from '../../helpers/Constants.js'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: data => ({
                url: `${AUTH_LOGIN_URL}`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: data => ({
                url: `${AUTH_REGISTER_URL}`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApiSlice