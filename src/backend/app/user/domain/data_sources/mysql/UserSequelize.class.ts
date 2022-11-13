import {UserRepository} from '../../../../shared/global/domain/repositories';
import { User as UserModelSequelize } from '../../models/User';
import { CreateUserRequest, User} from '../../entities/User';
import { Model } from 'sequelize/types';

export class UserSequelize implements UserRepository {

  private static userSequelize : UserSequelize

  public async create(userCreate: CreateUserRequest): Promise<Model<User>> {
    const user: Model<User> = await UserModelSequelize.create(userCreate)
    return user
  }
  public async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public async getByEmail(email: string): Promise<User> {
    const user : any = await UserModelSequelize.findOne({ where: { email } })
    return user
  }
  /**
  * This function return the instance of the class. If the instance doesn't exist, it creates it. (Singleton Pattern).
  * @returns {UserSequelize}
  */
   public static getUserSequelizeInstance(): UserSequelize {
    if (!UserSequelize.userSequelize) {
      UserSequelize.userSequelize = new UserSequelize();
    }
    return UserSequelize.userSequelize;
  }
  /*
  public async getById(id: string): Promise<Trip> {
    const collection = await this.getCollection();
    const trip: Trip = await collection.findOne({ id });
    return trip;
  }

  /// COllection per request
  private async getCollection() {
    const url = 'mongodb://localhost:27017';
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });

    const db = client.db('ticketing');
    return db.collection('trips');
  }
  */
}
export default UserSequelize;