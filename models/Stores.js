import Sequelize from "sequelize";
import db from "../db.js";

const StoreModel = db.define('stores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    store_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category_store: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default StoreModel;