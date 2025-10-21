// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
//The line below  serves as homepage saying Hello World!
router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
// Parameterised route
router.get("/welcome/:name", (req, res) => {
    // Get  the "name" parameter from the URL
    const userName = req.params.name;
  
    // Send back a personalised message with that extracted name
    res.send(`<h1>Welcome, ${userName}!</h1>`);
  });

//The lines below show the creation of a contacts page and showcases some contact information like my email.
//It also includes a section in which people can contact me, and I will try my best to reply as soon as possible. 
router.get("/contact", (req, res) => 
  res.send(`
    <h1>This is my contacts page</h1>
    <h2>Contact me at vrota001@campus.goldsmiths.ac.uk</h2>
    <h3>For any other concerns, contact me at the above email, and I will reply at my earliest convinience </h3>
  `));

router.get("/date", (req, res) => {
    // Create a new Date object  which represents the current date and time
    const now = new Date();

    // Format the date and time in "day/month/year, time"  in a UK style. 
    const formattedDate = now.toLocaleString("en-GB");

    // Send back a HTML response showing the current date and time
    res.send(`
        <h1>Current Date and Time:</h1>
        <h2>${formattedDate}</h2>
    `);
});
// Route chaining using "next()"
router.get("/chain",
    (req, res, next) => {
      console.log("First handler called");
      //You could attach some data here to pass to the next handler. We are just going to say Step 1 finished/Step 2 for testing purposes.
      req.message = "Step 1 is finished ";
      next(); // passes control to the next function
    },
    (req, res) => {
      console.log("Second handler called");
      res.send(`<h1>${req.message} Step 2 is finished!!!</h1>`);
    }
  );
//Sending a static HTML file
const path = require("path");

router.get("/file", (req, res) => {
  // __dirname gives the current directory of this file
  res.sendFile(path.join(__dirname, "../a.html"));
});
// Export the router object so index.js can access it
module.exports = router;
