
import { auth } from './api/auth';
import { config } from './api/config';
import { patch } from './api/patch';
import { socket } from './api/socket';

export var api = {
  auth: auth,
  config: config,
  patch: patch,
  socket: socket
};
