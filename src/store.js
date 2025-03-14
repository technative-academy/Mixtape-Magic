import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import playlistReducer from './slices/playlistSlice'
import usersReducer from './slices/usersSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        playlists: playlistReducer,
        users: usersReducer,
    },
})

export default store
