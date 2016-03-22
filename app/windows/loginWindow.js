
import { app, BrowserWindow } from 'electron';
import devHelper from '../vendor/electron_boilerplate/dev_helper';
import env from '../env';

export default function() {
  var result = new BrowserWindow({
    width: 345,
    height: 500,
    frame: false
  });

  result.loadURL('file://' + __dirname + '/login.html');

  if (env.name !== 'production') {
    devHelper.setDevMenu();
    result.openDevTools();
  }

  return result;
};
