// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, BrowserWindow, ipcMain } from 'electron';
import { fs } from 'fs';
import devHelper from './vendor/electron_boilerplate/dev_helper';
import windowStateKeeper from './vendor/electron_boilerplate/window_state';
import LoginWindow from './windows/loginWindow';
import MainWindow from './windows/mainWindow';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import { env } from './env';

var mainWindow;
var loginWindow;

app.on('ready', function () {
  var session = {
    username: '',
    token: ''
  };

  loginWindow = new LoginWindow();

  if (false && env.env.name !== 'production') {
    devHelper.setDevMenu();
    mainWindow.openDevTools();
  }

  ipcMain.on('loadMainPage', function(e, username, token) {
    session.username = username;
    session.token = token;

    mainWindow = new MainWindow();
    mainWindow.openDevTools();
    loginWindow.close();

    mainWindow.webContents.on('did-finish-load', function() {
      mainWindow.webContents.send('init-ws', session.username, session.token);
    });
  });

});

app.on('window-all-closed', function () {
    app.quit();
});
