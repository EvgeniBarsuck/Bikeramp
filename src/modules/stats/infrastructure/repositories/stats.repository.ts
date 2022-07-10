import { postgresDataSource } from '@config/postgres';
import { Repository } from '@libs/postgresql/src/infrastructure/repositories';
import { StatsEntity } from '@modules/stats/infrastructure/entities';

const statsEntity = postgresDataSource.getRepository(StatsEntity);

const baseStatsRepository = new Repository(statsEntity);

export const StatsRepository = baseStatsRepository;
