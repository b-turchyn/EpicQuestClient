import { config } from './config';

var getVersionAsArray = function() {
  return getVersionAsString().split('.');
};

var getVersionAsString = function() {
  return (config.version() || '0.0.0');
};

export var version = {
  getVersionAsArray: getVersionAsArray,
  getVersionAsString: getVersionAsString
};
