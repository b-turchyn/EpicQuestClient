import { env, VERSION } from '../env';
var $ = require('jquery');
var ipcRenderer = require('electron').ipcRenderer;

var errorText = $("#error");

errorText.html("&nbsp;");

$("#loginForm").submit(function(e) {
  errorText.html("&nbsp;");
  e.preventDefault();
  $.post(env.web_protocol + '://' + env.web_host + '/api/v1/login', {
      'username': $("#username").val(),
      'password': $("#password").val()
    }, function(data, textStatus, xhr) {
      console.log(data);
      console.log(textStatus);
      console.log(xhr);
      ipcRenderer.send('loadMainPage', $("#username").val(), data.token);
    }
  ).fail(function(xhr) {
    errorText.html('Wrong username or password');
  });
});
