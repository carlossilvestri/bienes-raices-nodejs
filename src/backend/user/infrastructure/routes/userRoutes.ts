import { Router, Request, Response, NextFunction } from "express"
import { loginForm, registerForm, forgetPasswordForm } from "../controllers/userController"
const router = Router()

// Routing
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hola desde userRoutes`)
})
router.get('/login', loginForm)
router.get('/register', registerForm)
router.get('/forget-password', forgetPasswordForm)


export default router