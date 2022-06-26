import { User } from '../../../shared/domain/entities';
import { CreateUserRequest } from '../entities/User';

export interface UserRepository {
  save(user: User): Promise<void>
  create(userCreate: CreateUserRequest): Promise<any>
  getById(id: string): Promise<User>
}