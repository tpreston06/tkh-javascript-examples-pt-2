const os = require("os");

(function () {
  console.log(os.cpus());
  console.log(os.hostname());
  console.log(os.arch());
})();

//Next let's get more information about the user's Home directory AND their Host name using the OS Module
