import { Router, Request, Response, NextFunction } from "express"

const router = Router()

// Routing
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hola desde userRoutes`)
})
router.get('/auth', (req: Request, res: Response, next: NextFunction) => {
    res.render('views/pug/auth/login')
})
router.get('/login', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Desde userRoutes login`)
})
export default router