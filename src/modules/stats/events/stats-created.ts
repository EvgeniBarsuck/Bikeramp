import { CreateStats } from '@modules/stats/interfaces';

export class StatsEventCreated {
  constructor(public readonly stats: CreateStats) {}
}
