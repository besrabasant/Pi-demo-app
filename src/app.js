import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(socketio(socket));

export default app;