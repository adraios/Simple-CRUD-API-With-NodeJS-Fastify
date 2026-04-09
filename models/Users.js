import Sequelize from "sequelize";
import db from "../db.js";

const UserModel = db.define('users', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

export default UserModel;