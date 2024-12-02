const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  bgColor: { 
    type: String,
    required: true,
  },
},  { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
