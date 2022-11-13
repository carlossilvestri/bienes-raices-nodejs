import { Request, Response, NextFunction } from "express"
import { body, check, validationResult } from "express-validator";
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
    // Get data
    const { name, email, password } = req.body
    let objToSend : any = { page: 'Crear Cuenta', message: "Hemos Enviado un Email de Confirmación, presiona en el enlace",  user: { name, email }}
    // Express validator
    await check('repeat_password').equals(password).withMessage('Las contraseñas no son iguales').run(req)

    let result = validationResult(req)
    // Check the result is empty.
    if(!result.isEmpty()){
        // Errors
        objToSend.errors = result.array()
        return res.render('views/pug/auth/register', objToSend)
    }
    const userCreated: any = await createUserInteractor(req)
    if(userCreated.error) objToSend.errors = [{msg: userCreated.msg}]
    
    objToSend.page = "Cuenta Creada Correctamente"
    res.render("views/pug/templates/message", objToSend)
    // res.status(httpStatus.CREATED).json({ data: userCreated})
}