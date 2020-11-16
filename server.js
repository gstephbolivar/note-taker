//  Require Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
// Create an instance of express
const app = express();

// Set the PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Require routes file
require("./routes/APIroutes")(app);
require("./routes/viewRoutes")(app);

// Listen on the PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
