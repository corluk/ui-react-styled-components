const package= require("./package.json")
const fs = require("fs")
package.scripts = {
    "dev": "NODE_ENV=development node_modules/.bin/webpack serve   --config webpack.dev.config.js ",
    "compile": "node_modules/.bin/tsc",
    "test": "jest"
}

fs.writeFileSync("./package.json",JSON.stringify(package,null,2))