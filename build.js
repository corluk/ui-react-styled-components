const package= require("./package.json")
const fs = require("fs")
package.scripts = {
    "clean " : "node_modules/.bin/tsc --clean",
    "devWebpack": "yarn clean && NODE_ENV=development node_modules/.bin/webpack   --config webpack.dev.config.js ",
    "compile": "yarn clean && node_modules/.bin/tsc",
    "test": "jest",
    "devServer": "NODE_PROXY=http://localhost:3000 nodemon server/index.tsx",
    "dev": "concurrently \"yarn dev\"  \"yarn devServer\" ",
    "publishMinor": "yarn compile &&  yarn version --minor && yarn publish " , 
    "publishMajor" : "yarn compile &&  yarn version --ajor  && yarn publish " , 
}

package.publishConfig = {
    registry :  "https://npm.pkg.github.com"
}

fs.writeFileSync("./package.json",JSON.stringify(package,null,2))