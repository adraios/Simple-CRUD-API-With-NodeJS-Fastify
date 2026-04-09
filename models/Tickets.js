import Sequelize from "sequelize";
import db from "../db.js";
import UserModel from "./Users.js";
import StoreModel from "./Stores.js";

const TicketsModel = db.define('tickets', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date_time: {
        type: 'TIMESTAMP',
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM(['Created', 'Confirmed', 'Resolved', 'Cancelled', 'In Progress']),
        allowNull: false
    },
    observation: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    end_date_time: {
        type: 'TIMESTAMP',
        allowNull: false
    }
});

UserModel.hasMany(TicketsModel, {
    foreignKey: {
        name: 'user_id',
        type: Sequelize.STRING,
        allowNull: false
    }
});

StoreModel.hasMany(TicketsModel, {
    foreignKey: {
        name: 'store_id',
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default TicketsModel;