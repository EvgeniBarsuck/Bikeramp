import { databaseConfig, config } from '@config/app/config';
import { StatsModule } from '@modules/stats/stats.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  controllers: [],
  imports: [
    StatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule,
    TypeOrmModule.forRoot({
      database: databaseConfig.POSTGRES_DB,
      dropSchema: config.NODE_ENV === 'test' ? true : false,
      entities: [path.join(__dirname, './**/**/**/entities/**')],
      host: databaseConfig.POSTGRES_HOST,
      password: databaseConfig.POSTGRES_PASSWORD,
      port: Number(databaseConfig.POSTGRES_PORT),
      synchronize: true,
      type: databaseConfig.DB_TYPE,
      username: databaseConfig.POSTGRES_USER,
    }),
  ],
  providers: [],
})
export class AppModule {}
