import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../services/apiService'

// API env
const API_URL = `${import.meta.env.VITE_API_URL}/api/my-playlists`

export const fetchPlaylistById = createAsyncThunk(
    'playlist/fetchPlaylistById',
    async (playlistId) => {
        const response = await apiService(`api/playlists/${playlistId}`, {
            method: 'GET',
        })
        return response
    }
)

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
