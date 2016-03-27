var request = require('request');
var kbpgp = require('kbpgp');

import { env } from '../env';

var patchKey;

var patcher = {
  patchKey: null,
  performPatching: function(callback) {
    this.getPatchKey(function(key) {
      this.patchKey = key;
      this.getPatchList(callback);
    });
  },
  getPatchKey: function(callback) {
    request('https://keybase.io/bturchyn/key.asc', function(error, resp, body) {
      if (!error && resp.statusCode == 200) {
        kbpgp.KeyManager.import_from_armored_pgp({
          armored: body
        }, function(err, result) {
          callback(result);
        });
      }
    });
  },
  getPatchList: function(callback) {
    console.log('Retrieving patch list');
    var file = env.web_protocol + '://' + env.web_host + '/patches.txt';
    request(file, function(error, resp, body) {
      if (!error && resp.statusCode == 200) {
        verifyPatchFile(body, function(result) {
          if (result === true) {
            console.info('Successfully retrieved and validated patch file');
          } else {
            console.error('Could not verify patch file: ' + result);
          }
        });
      }
    });
  },

  verifyPatchFile: function(contents, callback) {
    var ring = new kbpgp.keyring.KeyRing;
    ring.add_key_manager(patchKey);

    kbpgp.unbox({keyfetch: ring, armored: contents}, function(err, literals) {
      callback(err != null || err);
    });
  }

};

export default patcher;

/*
 *kbpgp.KeyManager.import_from_armored_pgp({
 *  armored: ''
 *}, function(err, result) {
 *  if (!err) {
 *    console.log('PGP key loaded');
 *  }
 *});
 */
