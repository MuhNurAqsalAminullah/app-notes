import supabase from "../config/supabaseClient";

// Get All Notes Data >>>>
export const fetchNotes = async () => {
  const { data, error } = await supabase.from("list notes").select();

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
};

// Get One Notes Data >>>>
export const fetchNoteById = async (id) => {
  const { data, error } = await supabase
    .from("list notes")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
};

// Create a new Notes Data >>>>
export const createNotes = async (name, deskripsi) => {
  const { data, error } = await supabase
    .from("list notes")
    .insert([{ name: name, deskripsi: deskripsi }]);

  if (error) {
    throw error;
  }

  return data[0];
};

// Update One data in Notes Data >>>>
export const updateNotes = async (id, name, deskripsi) => {
  const { data, error } = await supabase
    .from("list notes")
    .update({ name: name, deskripsi: deskripsi })
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }

  if (data) {
    console.log(data);
    return data;
  }
};

// Delete One a Notes Data >>>>
export const deleteNotes = async (id) => {
  const { data, error } = await supabase
    .from("list notes")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }

  if (data) {
    console.log(data);
  }

  return id;
};
