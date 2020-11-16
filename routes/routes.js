const path = require("path");
const fs = require("fs");
// const {v4: uuidv4} = require("uuid");

module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);

    // API Routes
    app.get("/api/notes", (req, res) => {
      res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
      let newNote = req.body;
      console.log(newNote);
    //   newNote.id = uuidv4();
      notes.push(newNote);
      updatedDb();
    });

    app.get("/api/notes/:id", (req,res) => {
        res.json(notes[req.params.id]);
    })

    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1);
        updateDb(notes);
    })

    // View Routes
    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Function to update db.json file whenever a note is added or deleted
    function updatedDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), (err, data) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
