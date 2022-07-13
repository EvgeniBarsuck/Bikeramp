import { MapboxModule } from '@libs/mapbox/mapbox.module';
import { controllersStats } from '@modules/stats/controllers/controllers-stats';
import { StatsEntity } from '@modules/stats/entities';
import { commandStatsHandlers } from '@modules/stats/handlers';
import { queriesStatsHandlers } from '@modules/stats/queries';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [...controllersStats],
  exports: [TypeOrmModule],
  imports: [MapboxModule, HttpModule, CqrsModule, TypeOrmModule.forFeature([StatsEntity])],
  providers: [...commandStatsHandlers, ...queriesStatsHandlers],
})
export class StatsModule {}
