const express = require("express");
// storing express in the var
const app = express();

// storing member and linking it to the member javascript file //
// also known as import routes//
// can also use const //
let member = require("./member.js");
let guest = require("./guest.js");


// also known as mount routes //
// saying app use this endroute to call everything in the member javascript file//
app.use("/member", member);
app.use("/guest", guest);

// if port 8000 doesnt work you can use 8001, 8002, 8003 //
// run at port 8000/
// telling it what port to use //
app.listen(8000, () =>{
    console.log("app listening on port 8000");
});

