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

        const options = {
            host: dbCfg.host,
            dialect: 'postgres',
            logging: false
        };

        if (process.env.SSL === 'true')
        {
            options.dialectOptions = {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            };
        }

        this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, options);
    }
}

export default new DBInstance().sequelize;