//importing path module
const path = require("path");
const directoryName = path.dirname(__dirname);
console.log(directoryName);
const extensionName = path.extname(path.join(directoryName,'server.js'));
console.log(extensionName);
const absoluteDirectoryName = path.basename(__dirname);
console.log(absoluteDirectoryName);