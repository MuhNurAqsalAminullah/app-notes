import axios from "axios";

// Pakai Strapi >>>>
// const API_BASE_URL = "http://localhost:1337/api/notes";
const API_BASE_URL = "https://64ad31a3b470006a5ec58334.mockapi.io/notes";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Get All Notes Data >>>>
export const fetchNotes = async () => {
  const response = await api.get("/");
  // const data = response.data;
  // console.log(data.data);
  // return data.data;
  console.log(response.data);
  return response.data;
};

export const searchNotes = async (keyword) => {
  const response = await api.get(`?search=${keyword}`);
  // const data = response.data;
  // console.log(data.data);
  // return data.data;
  console.log(response.data);
  return response.data;
};

export const fetchNoteById = async (id) => {
  const response = await api.get(`/${id}`);
  // const data = response.data;
  // console.log(data.data);
  // return data.data;
  console.log(response.data);
  return response.data;
};

// Create a new Notes Data >>>>
export const createNotes = async (note) => {
  // const response = await api.post("/", {
  //   data: note,
  // });
  const response = await api.post("/", note);
  return response.data;
};

// Delete One a Notes Data >>>>
export const deleteNotes = async (id) => {
  const response = await api.delete(`/${id}`);
  // const data = response.data;
  // return data.data;
  return response.data;
};

// Update One data in Notes Data >>>>
export const updateNotes = async (id, note) => {
  // const response = await api.put(`/${id}`, {
  //   data: note,
  // });
  const response = await api.put(`/${id}`, note);
  return response.data;
};
