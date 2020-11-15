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

  });
};

//   // View Routes
//   app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
//   });
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

// };
