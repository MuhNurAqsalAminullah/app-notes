import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchNotes,
  createNotes,
  deleteNotes,
  updateNotes,
  fetchNoteById,
} from "../../api";

// Redux toolkit thunk >>>>
export const fetchNotesAsync = createAsyncThunk(
  "notes/fetchNotes",
  async () => {
    return fetchNotes();
  }
);

export const createNotesAsync = createAsyncThunk(
  "notes/createNotes",
  async ({ name, deskripsi }) => {
    return createNotes(name, deskripsi);
  }
);

export const deleteNotesAsync = createAsyncThunk(
  "notes/deleteNotes",
  async (id) => {
    return deleteNotes(id);
  }
);

export const updateNotesAsync = createAsyncThunk(
  "notes/updateNotes",
  async ({ id, name, deskripsi }) => {
    return updateNotes(id, name, deskripsi);
  }
);

export const fetchNoteByIdAsync = createAsyncThunk(
  "notes/fetchNoteById",
  async (id) => {
    return fetchNoteById(id);
  }
);

const fetchDataSlice = createSlice({
  name: "notes",
  initialState: {
    list: [],
    note: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotesAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchNotesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNotesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNotesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list.push(action.payload);
      })
      .addCase(createNotesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteNotesAsync.fulfilled, (state, action) => {
        const id = action.payload;
        state.list = state.list.filter((note) => note.id !== id);
      })
      .addCase(updateNotesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateNotesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedNote = action.payload;
        const existingNoteIndex = state.list.findIndex(
          (note) => note.id === updatedNote.id
        );
        if (existingNoteIndex !== -1) {
          state.list[existingNoteIndex] = updatedNote;
        }
      })
      .addCase(updateNotesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNoteByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNoteByIdAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.note = action.payload;
      })
      .addCase(fetchNoteByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchDataSlice.reducer;
