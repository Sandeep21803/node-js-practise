const fs = require('node:fs');

fs.writeFile("hey.txt","Tum kaise ho",function (err){
    if (err) console.error(err);
    else console.log("done");
})