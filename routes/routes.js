const path = require("path");
const fs = require("path");

module.exports = (app) => {

    // View Routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  // API Routes
app.get("/api/notes", (req, res) => {
    return res.json(newNote);
  });
}