import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
import mainRoutes from './shared/infrastructure/routes/mainRoutes'
import { connectionToSequelize } from './shared/domain/config/data_base/sequelize';

/* INIT APP */
const app = express()

// Enable to send form data.
app.use(express.urlencoded({extended: true}))

// Sequelize connection | Connection to Database
connectionToSequelize()

// Enable PUG
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../frontend'))

// Public folder. Now: We can have access to localhost/css/*
app.use(express.static(path.join(__dirname, '../frontend/public')))

// Routing
app.use('/', mainRoutes)

// Definir puerto y arrancar el proyecto
const port : number = Number(process.env.PORT) || 3000

app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})