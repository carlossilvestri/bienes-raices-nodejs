import { ExpressValidatorMessagesClass } from "../../../shared/global/infrastructure/middlewares/ExpressValidatorMessagesClass"
import { check, param, query, } from "express-validator"

/* SINGLETON ON  MIDDLEWARE */
export const validatorMiddleware: ExpressValidatorMessagesClass = ExpressValidatorMessagesClass.getValidatorMiddleware()

export const createUserMiddleware = validatorMiddleware.validate([
    check('name').notEmpty().withMessage('El nombre no puede ir vacio'),
    check('email').isEmail().withMessage('Email no valido'),
    check('password').isLength({min: 6 }).withMessage('La contraseña debe ser de al menos 6 carácteres'),

])