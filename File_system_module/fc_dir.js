const fs = require("fs")

fs.mkdir("./myFolder", (err) => {
    if(err){
        console.log(err);
        return;

    }
    console.log("Folder created successfully");
});