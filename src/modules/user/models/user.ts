import { UserEventCreated } from '@modules/user/events';
import { UserEntity } from '@modules/user/infrastructure/entities';
import { AggregateRoot } from '@nestjs/cqrs';

export class UserModel extends AggregateRoot {
  constructor(private readonly auction: UserEntity) {
    super();
  }

  createUser() {
    const auction = { ...this.auction };

    this.apply(new UserEventCreated(auction));
  }
}
