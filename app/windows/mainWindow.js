
import { app, BrowserWindow } from 'electron';
import devHelper from '../vendor/electron_boilerplate/dev_helper';
import windowStateKeeper from '../vendor/electron_boilerplate/window_state';

export default function() {
  var mainWindowState = windowStateKeeper('main', {
    width: 1000,
    height: 600
  });

  var result = new BrowserWindow({
    width: 1000,
    height: 600
  });

  if (mainWindowState.isMaximized) {
    result.maximize();
  }

  result.loadURL('file://' + __dirname + '/app.html');

  return result;
};
