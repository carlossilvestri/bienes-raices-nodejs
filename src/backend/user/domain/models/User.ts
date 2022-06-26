import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../../shared/domain/config/data_base/sequelize";

export const User = sequelizeConnection.define('user', {
    user_uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    token: DataTypes.STRING,
    isConfirmed: DataTypes.BOOLEAN,
})