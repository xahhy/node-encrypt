# How To Debug Nodejs

This is the demo of session 'Debug 9 Methods', it shows how to debug a nodejs program using profile.

## How

- Debug while developing
  `node --inspect xxx.js`
- Debug in production
  - Get `PID` of the nodejs process
  - Use `kill -s USR1 $PID` to enable inspect mode.
  - Open `chrome://inspector` in chrome to open debug console.
  - Use `Profile` fro recording CPU usage of the program.
- Stop inspect mode:
  - Run require("inspector").close() in the debugger console to close inspector.

## Tips

- `node --preserve-symlinks`, use `--preserve-symlinks` to preserve node_modules which was using symlink, can map `local:remote` file using vscode remote debugger.

- Use `"skipFiles": ["<node_internals>/**/*.js"]` to skip internal files using debugger. Details see [skipping-uninteresting-code-node-chrome](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_skipping-uninteresting-code-node-chrome)
