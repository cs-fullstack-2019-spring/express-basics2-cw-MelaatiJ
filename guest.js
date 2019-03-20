const express = require("express");
let router = express.Router();


// route at index that returns response //
router.get("/", (request, response) =>{
    response.send("Welcome to the Guest Support Page");
});

//route at /register that returns response//
router.get("/register", (request, response) =>{
    response.send("Thank you wanting to register for this site!");
});

// route at contact that also has an id and returns response
router.get("/contact/:phone", (request, response) =>{
    response.send(`We will contact you shortly at ${request.params.phone} Guest`);
});

module.exports = router;