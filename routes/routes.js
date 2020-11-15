const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);

    // API Routes
    app.get("/api/notes", (req, res) => {
      res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
      const newNote = req.body;
      notes.push(newNote);
      updatedDb();
    });

    // View Routes
    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Function to update db.json file whenever a note is added or deleted
    function updatedDb() {
      fs.writeFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
