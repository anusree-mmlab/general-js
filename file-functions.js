const fs = require('fs');

fs.readFile(__dirname+'/test.txt','utf8', (err, data) => {
    if(err) {
        console.log("Error occured", err);
    } else {
        console.log("Data", data);
    }
});