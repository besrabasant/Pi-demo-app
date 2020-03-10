import path from 'path';
import feathers from '@feathersjs/feathers';
import '@feathersjs/transport-commons';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import configuration from '@feathersjs/configuration';

import registerChannels from './app/channels';
import registerServices from './app/services';

const feathersApp = feathers().configure(configuration());
const app = express(feathersApp);

app.configure(socketio());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, feathersApp.get('publicDir'))));
app.use(express.errorHandler());

registerServices(app);
registerChannels(app);

app.listen(feathersApp.get('port')).on('listening', () =>
  console.log(`Feathers server listening on localhost:${feathersApp.get('port')}`));