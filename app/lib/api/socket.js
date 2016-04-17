import { socket_url } from '../../env';

export var socket = {
  connect: function(username, token) {
    var socket = io.connect(socket_url);
    socket.on('connect', function() {
      socket.emit('auth', username, token, function(result) {
        console.log('Token auth result: ' + result);
        if (!result) {
          socket.disconnect();
        } else {
          console.log('Authenticated successfully!');
        }
      });
    });

    return socket;
  }
};
