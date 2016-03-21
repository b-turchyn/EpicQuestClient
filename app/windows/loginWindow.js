
import { app, BrowserWindow } from 'electron';
import devHelper from './vendor/electron_boilerplate/dev_helper';

export default function() {
  result = new BrowserWindow({
    width: 345,
    height: 500,
    frame: false
  });

  result.loadURL('file://' + __dirname + '/login.html');

  return result;
};
