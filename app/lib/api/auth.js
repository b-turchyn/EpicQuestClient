var request = require('request');
import { web_url } from '../../env';

export var auth = {
  login: function(username, password, callback) {
    request.post({
      url: web_url + '/api/v1/login',
      form: {
        username: username,
        password: password
      }
    }, function(error, response, body) {
      var data;
      try {
        data = JSON.parse(body);
      } catch (err) {
        data = null;
      }
      callback(data, response.statusCode, body);
    });
  }
};
