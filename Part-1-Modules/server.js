//os module
const os = require("os");
console.log("CPU ",os.cpus());
console.log("Arch ",os.arch());
console.log("Free memory in OS ",os.freemem());
console.log("Platform ",os.platform());
console.log("Temporary directory of OS ",os.tmpdir());
console.log("Total memory of system is ",os.totalmem());
console.log("Release of OS is ",os.release());
console.log("Current user is ",os.userInfo());