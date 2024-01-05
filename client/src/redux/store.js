import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import sessionMessageReducer from './slices/sessionMessageSlice.js'
import { apiSlice } from './slices/apiSlice.js'

const store = configureStore({
    reducer: {
        auth: authReducer,
        sessionMessages: sessionMessageReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.DEV
})

export default store