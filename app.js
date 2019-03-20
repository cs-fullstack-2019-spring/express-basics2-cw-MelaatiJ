const express = require("express");
// storing express in the var
const app = express();

// storing member and linking it to the member javascript file //
let member = require("./member.js");
// saying app use this endroute to call everything in the member javascript file//
app.use("/member", member);



let guest = require("./guest.js");
app.use("/guest", guest);



// telling it what port to use //
app.listen(8000, () =>{
    console.log("app listening on port 8000");
});

