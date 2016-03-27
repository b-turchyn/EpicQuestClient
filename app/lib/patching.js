var request = require('request');
var kbpgp = require('kbpgp');

var patchKey;

export performPatching = function () {
};

getPatchKey = function(callback) {
  request('https://keybase.io/bturchyn/key.asc', function(error, resp, body) {
    if (!error && response.statusCode == 200) {
      kbpgp.KeyManager.import_from_armored_pgp({
        armored: body
      }, function(err, result) {
        this.patchKey = result;
        callback(this.patchKey);
      });
    }
  });
}

kbpgp.KeyManager.import_from_armored_pgp({
  armored: ''
}, function(err, result) {
  if (!err) {
    console.log('PGP key loaded');
  }
});
