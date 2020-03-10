const dehydrate = require('feathers-sequelize/hooks/dehydrate');


export default (app:any) => {
    app.service('models/message').hooks({
        after: {
            find: [
                dehydrate()
            ]
        }
    });
}