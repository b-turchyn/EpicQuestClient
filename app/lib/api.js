
import { auth } from './api/auth';
import { config } from './api/config';
import { patch } from './api/patch';
import { socket } from './api/socket';
import { version } from './api/version';

export var api = {
  auth: auth,
  config: config,
  patch: patch,
  socket: socket,
  version: version
};
