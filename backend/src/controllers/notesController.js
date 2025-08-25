import Note from "../models/note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).send(notes);

  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({ message: "internal serval error", error });
  }
};

export const getNoteById = async (req, res) =>{
  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message:"Note not Found"});
    res.json(note);
  } catch (error) {
    console.log("Error in getNoteById controller", error);
    res.status(500).json({ message: "internal serval error", error });
  }
}

export const createANote = async (req, res) => {
  try {
    const { title, content } = req.body
    const newNote = new Note({ title, content })
    await newNote.save()
    res.status(201).json({ message: "Note created successfullly" })
  } catch (error) {
    console.log("Error in createANote controller", error);
    res.status(500).json({ message: "internal serval error", error });
  }
}

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {new : true});
    if(! updateNote) return res.status(404).json({message:"Note Not found"});

    res.status(200).json({ message: "Notes Updated Successfully" });
  } catch (error) {
    console.log("Error in updateNote controller", error);
    res.status(500).json({ message: "internal serval error", error });
  }
}



export const deleteNote = async (req, res) => {
 try {
   const deleteNote = await Note.findByIdAndDelete(req.params.id);
   if(! deleteNote) return res.status(404).json({ message: "Note Note Found to delete", error });
    
    res.status(200).json({ message: "Notes deleted Successfully" });
 } 
 catch (error)
  {
   console.log("Error in deleteNote controller", error);
    res.status(500).json({ message: "internal serval error", error });
  }
}