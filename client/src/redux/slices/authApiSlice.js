import { apiSlice } from "./apiSlice.js"
import { AUTH_LOGIN_URL } from '../../helpers/Constants.js'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: data => ({
                url: `${AUTH_LOGIN_URL}`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice