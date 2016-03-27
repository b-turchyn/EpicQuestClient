// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote, ipcRenderer } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { greet } from './hello_world/hello_world'; // code authored by you in this project
import { env, VERSION } from './env';

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);
console.log('Version: ' + VERSION);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('greet').innerHTML = greet();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = env.name;

    ipcRenderer.on('init-ws', function(e, username, token) {
      var socket = io.connect(env.socket_protocol + '://' + env.socket_host);
      socket.on('connect', function() {
        socket.emit('auth', username, token, function(result) {
          console.log("Token auth result: " + result);
          if(!result) {
            socket.disconnect();
          } else {
            console.log("Holy shit it works!");
          }
        });
      });
    });

});
