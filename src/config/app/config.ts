import { ConfigService } from '@nestjs/config';

export interface Config {
  DATABASE_URL: string;
}

export const configService = new ConfigService<Config>();

export const config = {
  database: {
    DATABASE_URL: configService.get<string>('DATABASE_URL'),
  },
};
