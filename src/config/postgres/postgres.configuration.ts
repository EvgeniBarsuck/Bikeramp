import { config } from '@config/app/config';
import * as path from 'path';
import { DataSource } from 'typeorm';

export const postgresDataSource: DataSource = new DataSource({
  entities: [path.join(__dirname, '../../**/entities/**')],
  logging: true,
  migrations: ['migrations/*.ts'],
  synchronize: false,
  type: 'postgres',
  url: config.database.DATABASE_URL,
});
