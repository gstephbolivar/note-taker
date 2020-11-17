const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");
// const dbData = require("../data/notesData");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);

module.exports = (app) => {
  // API Routes
  app.get("/api/notes", (req, res) => {
    return res.json(db);
  });
// Route to post a new note
  app.post("/api/notes", (req, res) => {
    let note = req.body;
    let id = uuidv4();
    note.id = id;
    writeFileSync("./db/db.json", JSON.stringify(db))
      .then(() => {
        res.json(note);
      })
      .catch((err) => console.error(err));

    db.push(note);
  });

  // app.delete("/api/notes/:id", (req, res) => {

  // })
};
