import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorController } from './competitor.controller';

describe('Competitor Controller', () => {
  let controller: CompetitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitorController],
    }).compile();

    controller = module.get<CompetitorController>(CompetitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
