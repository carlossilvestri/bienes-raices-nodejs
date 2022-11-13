import { Request } from "express"
import { emailRegister } from "../../../../shared/global/infrastructure/helpers/email";
import { generateId } from "../../../../shared/global/infrastructure/helpers/token";
import {CreateUserRequest, User} from '../../../../shared/global/domain/entities'
import { UserRepository } from "../../../../shared/global/domain/repositories"

const createUserInteractor = (
    userRepository: UserRepository
) => async ( req : Request) => {

  // Get data
  const { name, email, password } = req.body

  // Check email is not in the database
  const userExist : User = await userRepository.getByEmail(email)
  if(userExist) return { error: true, msg: 'El email del usuario ya está registrado en la BD, intente con otro.'}

  // Create user object
  const createUser: CreateUserRequest = {
      name,
      email,
      password,
      token: generateId(),
      isConfirmed: false // By default user is not confirmed
  };

  const userCreated : User = await userRepository.create(createUser)

  emailRegister(createUser)

  return userCreated;
};

export default createUserInteractor;