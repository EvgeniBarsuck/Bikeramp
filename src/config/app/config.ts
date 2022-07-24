import { ConfigService } from '@nestjs/config';

export interface Config {
  DB_TYPE: string;
  MAP_BASE_URL: string;
  MAP_TOKEN: string;
  NODE_ENV: string;
  POSTGRES_DB: string;
  POSTGRES_HOST: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_PORT: number;
  POSTGRES_USER: string;
}

export const configService = new ConfigService<Config>();

export const config = {
  NODE_ENV: configService.get('NODE_ENV'),
  database: {
    DB_TYPE: configService.get<'postgres' | 'mongodb'>('DB_TYPE') || 'postgres',
    POSTGRES_DB: configService.get<string>('POSTGRES_DB'),
    POSTGRES_HOST: configService.get('POSTGRES_HOST'),
    POSTGRES_PASSWORD: configService.get<string>('POSTGRES_PASSWORD'),
    POSTGRES_PORT: Number(configService.get<string>('POSTGRES_PORT')),
    POSTGRES_USER: configService.get<string>('POSTGRES_USER'),
  },
  mapApi: {
    MAP_BASE_URL: configService.get('MAP_BASE_URL'),
    MAP_TOKEN: configService.get('MAP_TOKEN'),
  },
  swagger: {
    description: 'The Bikeramp API',
    enabled: true,
    path: 'api',
    title: 'Bikeramp Backend',
    version: '1.0.0',
  },
};

export const databaseConfig = config.database;
