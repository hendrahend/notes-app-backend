import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// Create a new note
router.post("/", async (req, res) => {
  const { text, bgColor } = req.body;
  const newNote = new Note({ text, bgColor });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a note by ID
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted", note });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a note by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Test route
router.get("/", async (req, res) => {
  res.send("hi");
});

export default router;
