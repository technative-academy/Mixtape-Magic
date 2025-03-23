import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../services/apiService'

export const fetchPlaylists = createAsyncThunk(
    'playlists/fetchPlaylists',
    async () => {
        const response = await apiService('api/playlists', { method: 'GET' })
        return response
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
                state.items = []
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
