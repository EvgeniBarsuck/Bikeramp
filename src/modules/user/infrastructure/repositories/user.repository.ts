import { postgresDataSource } from '@config/postgres';
import { Repository } from '@libs/postgresql/src/infrastructure/repositories';
import { UserEntity } from '@modules/user/infrastructure/entities';

const userEntity = postgresDataSource.getRepository(UserEntity);

const baseUserRepository = new Repository(userEntity);

export const UserRepository = baseUserRepository;
