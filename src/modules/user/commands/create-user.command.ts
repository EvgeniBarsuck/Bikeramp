import { UserEntity } from '@modules/user/infrastructure/entities';

export class CreateUserCommand {
  constructor(public readonly user: UserEntity) {}
}
