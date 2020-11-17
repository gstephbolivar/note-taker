const path = require("path");
// const fs = require("fs");
const {v4: uuidv4} = require("uuid");
const db = require("../db/db.json");
const dbData = require("../data/notesData");


module.exports = (app) => {


    // API Routes
    app.get("/api/notes", (req, res) => {
      return res.json(dbData.readNotes());
    });

    app.post("/api/notes", (req, res) => {
     const newNote = req.body;
     newNote.id = uuidv4();
    const notes = dbData.readNotes();
    notes.push(newNote);

    dbData.writeData(notes);

     return res.json(notes);
     
    });

    // app.delete("/api/notes/:id", (req, res) => {
  
    // })

  

    
};

