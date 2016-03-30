var $ = require('jquery');
var ipcRenderer = require('electron').ipcRenderer;

import { api } from '../lib/api';

var errorText = $("#error");

errorText.html("&nbsp;");

$("#loginForm").submit(function(e) {
  errorText.html("&nbsp;");
  e.preventDefault();
  $.post('http://127.0.0.1:3000/api/v1/login', {
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
