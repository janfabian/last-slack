const exec = require('child_process').exec;
const cmd = "node main.js " + process.env.LASTFM_USER;

exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
});
