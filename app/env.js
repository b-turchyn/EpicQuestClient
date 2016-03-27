// Simple module exposes environment variables to rest of the code.
import jetpack from 'fs-jetpack';
var app = (
    process.type === 'renderer' ? 
    require('electron').remote.app : 
    require('electron').app
  );

var appDir = jetpack.cwd(app.getAppPath());

var manifest = appDir.read('package.json', 'json');

export const env = manifest.env;
export const VERSION = manifest.version;
