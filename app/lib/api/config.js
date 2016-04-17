const ElectronSettings = require('electron-settings');
let settings = new ElectronSettings();

export var config = {
  readConfig: function() {
    console.log(settings.getConfigFilePath());
  },
  dataPath: function(value) {
    if (value) {
      settings.set('dataPath', value);
    } else {
      return settings.get('dataPath');
    }
  }
};
