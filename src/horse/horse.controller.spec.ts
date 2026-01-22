import { Test, TestingModule } from '@nestjs/testing';
import { HorseController } from './horse.controller';
import { HorseService } from './horse.service';

describe('HorseController', () => {
  let controller: HorseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorseController],
      providers: [HorseService],
    }).compile();

    controller = module.get<HorseController>(HorseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
