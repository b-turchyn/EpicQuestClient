var request = require('request');
import { web_url } from '../../env';
import { config } from './config';
import { version } from './version';

export var patch = {
  /**
   * Callback is a function(error, patchData)
   */
  getPatches: function(callback) {
    var v = version.getVersionAsArray();
    
    request.get({
      url: web_url + '/api/v1/patches?major=' + v[0] + '&minor=' + v[1] + '&patch=' + v[2]
    }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        try {
          callback(null, JSON.parse(body));
        } catch (err) {
          // TODO: Is this sufficient?
          callback({statusCode: response.statusCode, error: err});
        }
      } else {
        callback({response: response, error: error});
      }
    });
  }
};
