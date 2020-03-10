import ModelMessageHook from './Hooks/Models/Message'

export default (app: any) => {
    app.configure(ModelMessageHook)
}