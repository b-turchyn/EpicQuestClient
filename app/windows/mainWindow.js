
import { app, BrowserWindow } from 'electron';
import devHelper from './vendor/electron_boilerplate/dev_helper';
import windowStateKeeper from './vendor/electron_boilerplate/window_state';

export default function() {
  mainWindowState = windowStateKeeper('main', {
    width: 1000,
    height: 600
  });

  result = new BrowserWindow({
    width: 1000,
    height: 600
  });

  if (mainWindowState.isMaximized) {
    result.maximize();
  }

  result.loadURL('file://' + __dirname + '/app.html');

  result.on('close', function () {
    mainWindowState.saveState(mainWindow);
  });

  return result;
};
