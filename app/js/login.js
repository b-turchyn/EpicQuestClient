var $ = require('jquery');
var ipcRenderer = require('electron').ipcRenderer;

import { api } from '../lib/api';

var errorText = $("#error");

errorText.html("&nbsp;");

$("#loginForm").submit(function(e) {
  errorText.html("&nbsp;");
  e.preventDefault();
  api.auth.login($("#username").val(), $("#password").val(), function(data, statusCode, xhr) {
    if (data) {
      if (statusCode === 200) {
        console.log('Success');
        console.log(xhr);
        ipcRenderer.send('loadMainPage', $("#username").val(), data.token);
      } else {
        $("#error").html(xhr);
      }
    } else {
      $("#error").html(xhr);
    }
  });
});
