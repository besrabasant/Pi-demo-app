import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequilize';
import service from 'feathers-sequelize';

class Message extends Model {
    public id!: number
    public text!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Message.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    sequelize
})

export default (app:any) => {
    app.use('models/message', service({Model: Message}));

    app.service('models/message').on('created', (message: any) => {
        console.log('A new message has been created', message);
    });
};