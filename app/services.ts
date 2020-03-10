import MessageService from './Services/MessageService';

export default (app: any) => {

    app.configure(MessageService);

}