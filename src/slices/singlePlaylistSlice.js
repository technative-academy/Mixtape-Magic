import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API env
const API_URL = `${import.meta.env.VITE_API_URL}/api/playlists`;

export const fetchPlaylistById = createAsyncThunk(
  "playlist/fetchPlaylistById",
  async (playlistId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${playlistId}`);
      if (!response.ok) throw new Error("Failed to fetch playlist");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const singlePlaylistSlice = createSlice({
  name: "playlist",
  initialState: {
    item: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearPlaylist: (state) => {
      state.item = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylistById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlaylistById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchPlaylistById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearPlaylist } = singlePlaylistSlice.actions;
export default singlePlaylistSlice.reducer;
