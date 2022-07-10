import { CreateStats } from '@modules/stats/interfaces';

export class CreateStatsCommand {
  constructor(public readonly stats: CreateStats) {}
}
