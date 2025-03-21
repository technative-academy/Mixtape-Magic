import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../services/apiService'

// API env
const API_URL = `${import.meta.env.VITE_API_URL}/api/playlists`

export const fetchPlaylistById = createAsyncThunk(
    'playlist/fetchPlaylistById',
    async (playlistId) => {
        const response = await apiService(`api/playlists/${playlistId}`, {
            method: 'GET',
        })
        return response
    }
)

export const createPlaylist = createAsyncThunk(
    'playlist/createPlaylist',
    async (playlistData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playlistData),
            });

            if (!response.ok) throw new Error('Failed to create playlist');

            return await response.json(); 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const singlePlaylistSlice = createSlice({
    name: 'playlist',
    initialState: {
        item: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        clearPlaylist: (state) => {
            state.item = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaylistById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPlaylistById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(fetchPlaylistById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export const { clearPlaylist } = singlePlaylistSlice.actions
export default singlePlaylistSlice.reducer
