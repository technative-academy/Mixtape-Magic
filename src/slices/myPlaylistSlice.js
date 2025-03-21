import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// API env
const API_URL = `${import.meta.env.VITE_API_URL}/api/my-playlists`

export const fetchMyPlaylists = createAsyncThunk(
    'playlists/fetchMyPlaylists',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_URL)
            if (!response.ok) throw new Error('Failed to fetch my playlists')
            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const myPlaylistSlice = createSlice({
    name: 'myPlaylists',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMyPlaylists.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMyPlaylists.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchMyPlaylists.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default myPlaylistSlice.reducer
