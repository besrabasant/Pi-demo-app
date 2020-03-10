export interface Message {
    id?: number;
    text: string;
}

class MessageService {
    app: any = {};

    messages: Message[] = []
    
    async find() {
        return this.messages;
    }

    async create(data: Pick<Message, 'text'>) {
        const message: Message = {
            text: data.text
        }
        
        this.messages.push(message);

        return message;
    }
}

export default (app:any) => {
    app.use('services/messages', new MessageService());
}

