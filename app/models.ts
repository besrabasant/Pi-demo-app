import MessageModel from './Models/Message'

export default (app: any) => {
    app.configure(MessageModel)   
}