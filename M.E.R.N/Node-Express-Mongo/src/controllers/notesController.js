const Note = require("../models/Note");

const notesController = {};

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesController.createNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newNote = new Note({ title, content, author, date });
  await newNote.save();
  res.send("Note Created");
};

notesController.getNote = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  res.json(note);
};

notesController.updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content, author, date } = req.body;
  await Note.findOneAndUpdate(id, { title, content, author, date });
  res.send("Note Updated");
};

notesController.deleteNote = async (req, res) => {
  const id = req.params.id;
  await Note.findOneAndRemove(id);
  res.send("Note Deleted");
};

module.exports = notesController;
