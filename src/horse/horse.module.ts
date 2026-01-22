import { Module } from '@nestjs/common';
import { HorseService } from './horse.service';
import { HorseController } from './horse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horse } from './horse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Horse])],
  controllers: [HorseController],
  providers: [HorseService],
})
export class HorseModule {}
