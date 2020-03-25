const express = require("express");
const notesController = require("../controllers/notesController");

const router = express.Router();

router
  .route("/")
  .get(notesController.getNotes)
  .post(notesController.createNote);

router
  .route("/:id")
  .get(notesController.getNote)
  .put(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
