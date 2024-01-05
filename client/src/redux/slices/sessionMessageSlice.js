import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    messages: []
}

const sessionMessageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.messages.unshift(action.payload)
            localStorage.setItem('messages', JSON.stringify(state.messages))
        },
        clearMessage: (state, action) => {
            state.messages.splice(action.payload, 0)
            localStorage.setItem('messages', JSON.stringify(state.messages))
        },
        clearAllMessages: (state, action) => {
            state.messages = []
            localStorage.removeItem('messages')
        }
    }
})

export const { showMessage, clearMessage, clearAllMessages } = sessionMessageSlice.actions
export default sessionMessageSlice.reducer