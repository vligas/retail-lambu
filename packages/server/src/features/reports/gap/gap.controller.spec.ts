import { Test, TestingModule } from '@nestjs/testing';
import { GapController } from './gap.controller';

describe('Gap Controller', () => {
  let controller: GapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GapController],
    }).compile();

    controller = module.get<GapController>(GapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
