//  Require Dependencies
const express = require("express");
const path = require("path");

// Create an instance of express
const app = express();

// Set the PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Listen on the PORT
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});