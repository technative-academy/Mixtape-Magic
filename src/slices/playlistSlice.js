import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// const API_URL = 'http://localhost:3001/api/playlists'

// API env
const API_URL = `${import.meta.env.VITE_API_URL}/api/playlist`;

export const fetchPlaylists = createAsyncThunk(
    'playlists/fetchPlaylists',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_URL)
            if (!response.ok) throw new Error('Failed to fetch playlists')
            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const playlistSlice = createSlice({
    name: 'playlists',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaylists.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default playlistSlice.reducer
