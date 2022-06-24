import {Sequelize} from "sequelize";
import {Sequelize as SequelizeType} from "sequelize/types";
import dotenv from 'dotenv'
dotenv.config()

/**
 * This const has all variables needed on
 */
const DATA : any = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DIALECT: 'mysql',
    DEFINE_TIMESTAMP: process.env.DEFINE_TIMESTAMP,
    POOL_MAX: process.env.POOL_MAX,
    POOL_MIN: process.env.POOL_MIN,
    POOL_ACQUIRE: process.env.POOL_ACQUIRE,
    POOL_IDLE: process.env.POOL_IDLE,
    OPERATOR_ALIASES: process.env.OPERATOR_ALIASES,
}

export const DATABASE : SequelizeType = new Sequelize(DATA.DB_NAME, DATA.DB_USER, DATA.DB_PASSWORD, {
    host: DATA.DB_HOST,
    port: DATA.DB_PORT,
    dialect: DATA.DB_DIALECT,
    define: {
        timestamps: DATA.DEFINE_TIMESTAMP
    },
    pool: {
        max: DATA.POOL_MAX,
        min: DATA.POOL_MIN,
        acquire: DATA.POOL_ACQUIRE,
        idle: DATA.POOL_IDLE
    },
    //@ts-ignore
    operatorAliases: DB_PASSWORD.OPERATOR_ALIASES
})