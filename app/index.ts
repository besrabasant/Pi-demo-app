import path from 'path';
import feathers from '@feathersjs/feathers';
import '@feathersjs/transport-commons';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import configuration from '@feathersjs/configuration';

export const feathersApp = feathers().configure(configuration());
export const app = express(feathersApp);

app.configure(socketio());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../'+ feathersApp.get('publicDir'))));
app.use(express.errorHandler());

export default {
    app,
    feathersApp
};