const ElectronSettings = require('electron-settings');
let settings = new ElectronSettings();

var getOrSet = function(key, value) {
  if (value) {
    settings.set(key, value);
  } else {
    return settings.get(key);
  }
};

export var config = {
  readConfig: function() {
    console.log(settings.getConfigFilePath());
  },
  dataPath: function(value) {
    getOrSet('dataPath', value);
  },
  version: function(value) {
    getOrSet('version', value);
  }
};
