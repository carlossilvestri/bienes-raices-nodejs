import { Router, Request, Response, NextFunction } from "express"
import { loginForm, registerForm, forgetPasswordForm, saveUser } from "../controllers/userController"
const router = Router()

// Routing
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hola desde userRoutes`)
})
router.route('/login')
        .get(loginForm)

router.route('/register')
        .get(registerForm)
        .post(saveUser)
        
router.route('/forget-password')
        .get(forgetPasswordForm)


export default router