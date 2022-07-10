import { UserEntity } from '@modules/user/infrastructure/entities';

export class UserEventCreated {
  constructor(public readonly user: UserEntity) {}
}
