import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import playlistReducer from './slices/playlistSlice'
import usersReducer from './slices/usersSlice'
import singlePlaylistReducer from "./slices/singlePlaylistSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        playlists: playlistReducer,
        users: usersReducer,
        singlePlaylist: singlePlaylistReducer
    },
})

export default store
