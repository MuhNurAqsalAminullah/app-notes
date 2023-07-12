import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchNotes,
  createNotes,
  deleteNotes,
  updateNotes,
  fetchNoteById,
  searchNotes,
} from "../../api";

export const fetchNotesAsync = createAsyncThunk(
  "notes/fetchNotes",
  async () => {
    const notes = await fetchNotes();
    return notes;
  }
);

export const searchNotesAsync = createAsyncThunk(
  "users/searchNotes",
  async (keyword) => {
    const Notes = await searchNotes(keyword);
    return Notes;
  }
);

export const createNotesAsync = createAsyncThunk(
  "notes/createNotes",
  async (note) => {
    const newNotes = await createNotes(note);
    return newNotes;
  }
);

export const deleteNotesAsync = createAsyncThunk(
  "notes/deleteNotes",
  async (id) => {
    await deleteNotes(id);
    return id;
  }
);

export const updateNotesAsync = createAsyncThunk(
  "notes/updateNotes",
  async (note) => {
    const response = await updateNotes(note.id, note);
    return response.data;
  }
);

export const fetchNoteByIdAsync = createAsyncThunk(
  "notes/fetchNoteById",
  async (id) => {
    const note = await fetchNoteById(id);
    return note;
  }
);

// export const selectNoteById = (state, id) => {
//   console.log(state.fetchData.list.find((note) => note.id === id));
//   return state.fetchData.list.find((note) => note.id === id);
// };

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
      .addCase(searchNotesAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
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
