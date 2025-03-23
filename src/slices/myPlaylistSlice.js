import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../services/apiService'

export const fetchMyPlaylists = createAsyncThunk(
    'playlists/fetchMyPlaylists',
    async () => {
        const response = await apiService('api/my-playlists', { method: 'GET' })
        return response
    }
)

export const updatePlaylist = createAsyncThunk(
    'playlist/updatePlaylist',
    async ({ playlistId, updatedData }) => {
        const response = await apiService(`api/my-playlists/${playlistId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedData),
        })
        return response
    }
)

export const createPlaylist = createAsyncThunk(
    'playlist/createPlaylist',
    async (updatedData) => {
        const response = await apiService(`api/my-playlists/`, {
            method: 'POST',
            body: JSON.stringify(updatedData),
        })
        return response
    }
)

export const addSong = createAsyncThunk(
    'playlist/addSong',
    async ({ playlistId, updatedData }) => {
        const response = await apiService(
            `api/my-playlists/${playlistId}/songs`,
            {
                method: 'POST',
                body: JSON.stringify(updatedData),
            }
        )
        return response
    }
)

export const deleteSong = createAsyncThunk(
    'playlist/deleteSong',
    async ({ playlistId, songId }) => {
        const response = await apiService(
            `api/my-playlists/${playlistId}/songs/${songId}`,
            {
                method: 'DELETE',
            }
        )
        return response
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
                state.items = []
            })
            .addCase(fetchMyPlaylists.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchMyPlaylists.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(updatePlaylist.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updatePlaylist.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(updatePlaylist.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(createPlaylist.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createPlaylist.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(createPlaylist.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(addSong.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addSong.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(addSong.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(deleteSong.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteSong.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(deleteSong.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default myPlaylistSlice.reducer
