import Sequelize from 'sequelize';
import 'dotenv/config';

class DBInstance
{
    constructor()
    {
        const dbCfg = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        };

        this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
            host: dbCfg.host,
            dialect: 'postgres',
            logging: false,
            
        });
    }
}

export default new DBInstance().sequelize;