export default (app: any) => {
    if (typeof app.channel !== 'function') {
        return
    }

    app.on('connection', (connection: any) => app.channel('everybody').join(connection));

    app.publish((data:any) => app.channel('everybody'));
}