const express = require("express");
//needed to make routes //
let router = express.Router();


// route that indicated index tp respond with stri//route that indicates sighin//
//
router.get("/", (request, response) =>{
    response.send("WELCOME TO THE MEMBER ONLY PAGE");
});

//route that indicates sighin//
router.get("/signin", (request, response) =>{
    response.send("PLEASE SIGN IN WITH YOUR MEMBER CREDENTIALS");
});

//route that takes two id with the route contact //
// object literal with strings //
router.get("/contact/:p/:name", (request, response ) =>{
    response.send(`THANKS ${request.params.name}!! WE WiLL CONTACT YOU SHORTLY AT ${request.params.p}`);
});

// charge balance post request //
router.post("/chargeBalance", (request, response) => {
    response.send ("post request ")
});
// pay balance post request  when //
router.post("/payBalance", (request, response) => {
    response.send("post request")
});

module.exports = router;