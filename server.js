//  Require Dependencies
const express = require("express");
const path = require("path");

// Create an instance of express
const app = express();

// Set the PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// New Notes
const newNote = [
  {
    title: "Note Title",
    text: "Note Text",
  },
];

// View Routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// API Routes
app.get("/api/notes", (req, res) => {
  return res.json(newNote);
});

// Listen on the PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
