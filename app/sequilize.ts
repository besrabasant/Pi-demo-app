import path from 'path';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sequelize', '', '', {
    dialect: 'sqlite',
    storage: path.join(__dirname, '/../database/database.sqlite'),
    logging: false
});

export default sequelize;
