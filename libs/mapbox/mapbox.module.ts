import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { MapboxService } from './src/mapbox.service';
import { Mapbox } from './src/mapbox.service.interface';

@Module({
  exports: [Mapbox],
  imports: [HttpModule],
  providers: [
    {
      provide: Mapbox,
      useClass: MapboxService,
    },
  ],
})
export class MapboxModule {}
