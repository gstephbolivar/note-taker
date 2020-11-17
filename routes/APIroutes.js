const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
let db = require("../db/db.json");
const dbData = require("../data/notesData");
const { writeFileSync } = require("fs");

module.exports = (app) => {
  // API Routes
  app.get("/api/notes", (req, res) => {
    return res.json(db);
  });

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
    let notes = fs.writeFileSync("../db/db.json", JSON.stringify(db))
    .then(() => {
      res.json(notes);
    })
    .catch((err) => console.error(err));
  
    // let notes = dbData.readNotes();
    notes.push(newNote);

    // dbData.writeNotes(notes);

    // return res.json(notes);
  });

  // app.delete("/api/notes/:id", (req, res) => {

  // })
};
