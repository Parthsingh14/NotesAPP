const Note  = require('../models/noteModel');

exports.getNotes = async (req,res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching notes', error: err.message });
    }
}

exports.getNote = async (req,res)=>{
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching note', error: err.message });
    }
}

exports.createNote = async (req,res) => {
    try{
        const {title, content} = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ message: 'Error creating note', error: err.message });
    }
}

exports.updateNote = async (req,res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: 'Error updating note', error: err.message });
    }
}

exports.deleteNote = async (req,res) =>{
    try{
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNote) {
            return res.status(404).json({ message: 'Note not found' });
        }   
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting note', error: err.message });
    }
}