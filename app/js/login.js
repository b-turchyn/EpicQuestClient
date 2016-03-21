var $ = require('jquery');

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
    }
  ).fail(function(xhr) {
    errorText.html('Wrong username or password');
  });
});
