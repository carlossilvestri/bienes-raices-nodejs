import UserSequelize from '../../../domain/data_sources/mysql/UserSequelize.class';
import createUserInteractor from './createUserInteractor';


const userRepository = UserSequelize.getUserSequelizeInstance();



export  default createUserInteractor(userRepository)