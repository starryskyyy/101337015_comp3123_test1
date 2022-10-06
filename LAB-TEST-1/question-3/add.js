const fs = require("fs")
const dir = "./Logs";

const createLogFiles = () => {
    // check ig folder exists
    if (!fs.existsSync(dir)) {
        // if it doesnt create folder
        fs.mkdirSync(dir)
    }
    // process to a new working directory
    process.chdir(dir)

    for (let i = 0; i < 10; i++) {
        // write file in the new folder with some text 
        fs.writeFile(`log${i}.txt`, `Some text in the file`, (err) => {
            // if no errors print success message otherwise print error message
            !err ? console.log(`'log${i}.txt'`) : console.error(`error!`)
            }
        )
    }
}

// exporting function 
exports.createLogFiles = createLogFiles