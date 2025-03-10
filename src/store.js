import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './slices/authSlice';
import playlistReducer from "./slices/playlistSlice";

const store = configureStore({
	reducer: {
		// auth: authReducer,
		playlists: playlistReducer,
	},
});

export default store;
