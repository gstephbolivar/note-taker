const fs = require("fs");

const db = require("../db/db.json");

// Function to write and save notes
const writeNotes = (userInput) => {
  fs.writeFileSync(db, JSON.stringify(userInput));
};

// Function to read notes
const readNotes = () => {
  const data = fs.readFileSync(db, "utf8");

  const notes = JSON.parse(data);
  return notes;
};

module.exports = { writeNotes, readNotes };
