const fs = require("fs");

const db = "db/db.json";

// Function to write and save notes
const writeNotes = (data) => {
  fs.writeFileSync(db, JSON.stringify(data));
};

// Function to read notes
const readNotes = () => {
  const data = fs.readFile(db, "utf8");

  let notes = JSON.parse(data);
  return notes;
};

module.exports = { writeNotes , readNotes };
