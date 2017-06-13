const
  fork = require("child_process").fork,
  main = fork("./main", [ process.env.LASTFM_USER] );
