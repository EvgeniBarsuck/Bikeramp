import { CreateUserCommand } from '@modules/user/commands';
import { UserModel } from '@modules/user/models';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userModel: UserModel, private readonly publisher: EventPublisher) {}

  async execute(command: CreateUserCommand) {}
}
