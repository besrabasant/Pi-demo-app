import MessageService, { Message } from './Services/MessageService';

export default (app: any) => {
    if (typeof app.service !== 'function') {
        return
    }

    app.use('messages', new MessageService());

    app.service('messages').on('created', (message: Message) => {
        console.log('A new message has been created', message);
    });

}