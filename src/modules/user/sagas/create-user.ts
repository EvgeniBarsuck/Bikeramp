import { UserEventCreated } from '@modules/user/events';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class CreateUserSaga {
  @Saga()
  createBid = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserEventCreated),
      mergeMap((event: UserEventCreated) => {
        return [];
      }),
    );
  };
}
