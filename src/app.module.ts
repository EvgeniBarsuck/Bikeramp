import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
