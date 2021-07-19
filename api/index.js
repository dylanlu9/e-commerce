// Import the Express.js. It'll be contained inside the 'express' variable,
// as a function that provides all the functionality.
const express = require('express');

// Initialize the application.
const app = express();

// Requests to the root URl ('/') will return some text.
app.get('/', (req, res) => {
   res.send("This is Dylan's E-Commerce backend.")
});

// Port this server will listen to.
const ourPort = 3001;

// Start the server in the port we specified.
app.listen(ourPort, () => {
   console.log(`E-commerce backend listening at http://localhost:${ourPort}`);
});
