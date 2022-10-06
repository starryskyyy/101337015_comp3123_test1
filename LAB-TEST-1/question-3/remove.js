const fs = require("fs");
const path = require("path");

const dir = "./Logs";


const removeLogFiles = () => {

    if (fs.existsSync(dir)) {
        fs.readdir(dir, (err, files) => {
            // if any errors occure print error message 
            if (err) console.error(`error occured with ${dir} directory`)
            else {
                for (let file of files) {
                    // remove files from the given directory
                    fs.unlink(path.join(dir, file), err => {
                        // print error message if any otherwise print success message
                        err ? console.error(err.message) : console.log(`delete files...'${file}'`)
                    });
                }
                // remove folder itself
                fs.rm(dir, { recursive: true, force: true }, err => {
                    // print error if any otherwise print success message
                    err ? console.error(err.message) : console.log(`directory ${dir} was deleted!`)
                })
            }
        });
    }
    else console.error(`directory ${dir} does not exists`)
    
    
}

// exporting function 
exports.removeLogFiles = removeLogFiles