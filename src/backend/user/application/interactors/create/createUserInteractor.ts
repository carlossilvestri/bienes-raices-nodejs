import { Request } from "express"
import {CreateUserRequest, User} from '../../../../shared/domain/entities'
import { UserRepository } from "../../../../shared/domain/repositories"

const createUserInteractor = (
    userRepository: UserRepository
) => async ( req : Request ) => {

  // Get data
  const { name, email, password, token } = req.body

  // Create user object
  const createUser: CreateUserRequest = {
      name,
      email,
      password,
      token,
      isConfirmed: false // By default user is not confirmed
  };

  const userCreated : User = await userRepository.create(createUser)
  console.log("userCreated ", userCreated)

  return userCreated;
};

export default createUserInteractor;