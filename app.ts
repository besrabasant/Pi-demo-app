import {app, feathersApp} from './app/index'
import channels from './app/channels';
import services from './app/services';
import models from './app/models';
import hooks from './app/hooks';

app.configure(channels)
app.configure(services)
app.configure(models)
app.configure(hooks)

app.listen(feathersApp.get('port')).on('listening', () =>
  console.log(`Feathers server listening on localhost:${feathersApp.get('port')}`));