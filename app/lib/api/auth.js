var request = require('request');
import { web_url } from '../../env';

export default {
  login: function(username, password, callback) {
    request.post({
      url: web_url + '/api/v1/login',
      form: {
        username: username,
        password: password
      }
    }, callback);
  }
};
