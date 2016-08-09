// npm install --save @horizon/client
import Horizon from '@horizon/client';

let port;
let secure;
if (process.env.NODE_ENV === 'production') {
  port = 443;
  secure = true;
} else {
  port = 8181;
  secure = false;
}

const host = window.location.hostname + ':' + port;

const horizon = Horizon({
  secure: secure,
  host: host
});

const chat = horizon('messages');
export {chat};