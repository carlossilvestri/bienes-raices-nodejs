import { Router, Request, Response, NextFunction } from "express"
import { loginForm, registerForm, forgetPasswordForm, saveUser } from "../controllers/userController"
import { createUserMiddleware } from "../middlewares/userMiddlewares"

const router = Router()

// Routing
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hola desde userRoutes`)
})
router.route('/login')
        .get(loginForm)

router.route('/register')
        .get(registerForm)
        .post([createUserMiddleware], saveUser)
        
router.route('/forget-password')
        .get(forgetPasswordForm)


export default router