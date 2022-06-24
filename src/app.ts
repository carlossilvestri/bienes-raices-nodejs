//@ts-ignore
import express, { Request, Response, NextFunction } from "express"
import userRoutes from "./backend/user/infrastructure/userRoutes"
import path from "path";
/* INIT APP */
const app = express()

// Enable PUG

app.set("view engine", "pug")
app.set("views", path.join(__dirname, './frontend'))


// Routing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hola mundo en express`)
})
app.use('/user', userRoutes)

// Definir puerto y arrancar el proyecto
const port : number = 3000

app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})