const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
const readFileSync = fs.readFileSync;

module.exports = (app) => {
  // API Routes
  app.get("/api/notes", (req, res) => {
    return res.json(db);
  });
  // Route to post a new note
  app.post("/api/notes", (req, res) => {
    // console.log(db);
    let note = req.body;
    // console.log(note);
    let id = uuidv4();
    note.id = id;
    // console.log(db);
    db.push(note);
    writeFileSync("./db/db.json", JSON.stringify(db))
      .then(() => {
        res.json(note);
      })
      .catch((err) => console.error(err));
  });
  // Route to delete a note
  app.delete("/api/notes/:id", (req, res) => {
    // Once note is deleted, it will disappear from the notes list
   readFileSync("./db/db.json", JSON.stringify(db), (error , data) => {
     let db = parseInt(data);
    let newNote = db.filter((note) => note.id != req.params.id);
    console.log(newNote);
    const updateNote = newNote;
    writeFileSync("./db/db.json", JSON.stringify(updateNote))
      .then(() => {
        res.json(updateNote);
      })
      .catch((err) => {
        console.error(err);
      });
   });
    
  });
};
