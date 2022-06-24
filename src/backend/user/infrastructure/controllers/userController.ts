import { Request, Response, NextFunction } from "express"


export const loginForm = (req: Request, res: Response, next: NextFunction) => {

    const objToSend = { page: 'Inicia sesión', authenticated: false}

    res.render('views/pug/auth/login', objToSend)
}

export const registerForm = (req: Request, res: Response, next: NextFunction) => {

    const objToSend = { page: 'Crear cuenta'}
    res.render('views/pug/auth/register', objToSend)
}

export const forgetPasswordForm = (req: Request, res: Response, next: NextFunction) => {

    const objToSend = { page: 'Recupera tu acceso a Bienes Raices'}
    res.render('views/pug/auth/forget-password', objToSend)
}