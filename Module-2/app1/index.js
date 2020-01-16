var fs = require('fs');
var fileNameArray = [];
var fileName = (process.argv[2]);


console.log("File Name is : " + fileName);
fileNameArray.push(fileNameArray)

if (fs.existsSync(fileName)) {
    console.log("File with filename " + fileName + " already exists!! Please enter new name...")
} else {
    fs.writeFile(fileName, 'You are awesome!!', function (err) {
        if (err) throw err;
        console.log("New file create with name : " + fileName);
        fs.appendFile('fileName.txt', (fileName + "\n"), function (err) {
            if (err)
                throw err
            console.log("File Name added in the file")
        })
    })
}