// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, BrowserWindow, ipcMain } from 'electron';
import devHelper from './vendor/electron_boilerplate/dev_helper';
import windowStateKeeper from './vendor/electron_boilerplate/window_state';
import LoginWindow from './windows/loginWindow';
import MainWindow from './windows/mainWindow';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env';

var mainWindow;
var loginWindow;

app.on('ready', function () {
  loginWindow = new LoginWindow();
  mainWindow = new MainWindow();

  if (false && env.name !== 'production') {
    devHelper.setDevMenu();
    mainWindow.openDevTools();
  }

  ipcMain.on('loadMainPage', function(e, token) {
    mainWindow.show();
    loginWindow.close();
  });
});

app.on('window-all-closed', function () {
    app.quit();
});
