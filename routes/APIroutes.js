const path = require("path");
const fs = require("fs");
const {v4: uuidv4} = require("uuid");
const db = require("../db/db.json");

module.exports = (app) => {


    // API Routes
    app.get("/api/notes", (req, res) => {
      return res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
     const newNote = req.body;
     newNote.id = uuidv4();
     db.readData(notes);
     notes.push(newNote);
     db.writeData(notes);

     return res.json(notes);
      updatedDb();
    });

    // app.delete("/api/notes/:id", (req, res) => {
    //     console.log(req.params.id);
    //     notes.splice(req.params.id, 1);
    //     updatedDb(notes);
    // })

  

    // Function to update db.json file whenever a note is added or deleted
    function updatedDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), (err, data) => {
        if (err) throw err;
        return true;
      });
    }
  };

