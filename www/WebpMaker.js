var exec = require("cordova/exec");

module.exports.coolMethod = function (arg0, success, error) {
  exec(success, error, "WebpMaker", "coolMethod", [arg0]);
};
/* this method add two numbers */
module.exports.add = function (arg0, success, error) {
  exec(success, error, "WebpMaker", "add", [arg0]);
};
