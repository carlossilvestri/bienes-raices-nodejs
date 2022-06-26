import { Request, Response, NextFunction } from "express"
import httpStatus from 'http-status';
import createUserInteractor from "../../application/interactors/create"
import { User } from "../../domain/entities/User"




/* SHOW VIEWS CONTROLLERS */

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

/* USER CONTROLLER ACTIONS */

/* This method should be used for POST and PUT */
export const saveUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const userCreated : User = await createUserInteractor(req)
    const objToSend = { page: 'Usuario creado'}
    res.status(httpStatus.CREATED).json({ data: userCreated})
}