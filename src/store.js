import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice';
import playlistReducer from "./slices/playlistSlice";
import singlePlaylistReducer from "./slices/singlePlaylistSlice";


const store = configureStore({
	reducer: {
		// auth: authReducer,
		playlists: playlistReducer,
		singlePlaylist: singlePlaylistReducer
	},
});

export default store
