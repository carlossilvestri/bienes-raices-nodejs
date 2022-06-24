//@ts-ignore
import express, { Request, Response, NextFunction } from "express"
import mainRoutes from "./shared/routes/mainRoutes"
import path from "path";
/* INIT APP */
const app = express()

// Enable PUG

app.set("view engine", "pug")
app.set("views", path.join(__dirname, '../frontend'))

// Public folder. Now: We can have access to localhost/css/*
app.use(express.static(path.join(__dirname, '../frontend/public')))

// Routing
app.use('/', mainRoutes)

// Definir puerto y arrancar el proyecto
const port : number = 3000

app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})