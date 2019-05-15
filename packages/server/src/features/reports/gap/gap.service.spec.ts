import { Test, TestingModule } from '@nestjs/testing';
import { GapService } from './gap.service';

describe('GapService', () => {
  let service: GapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GapService],
    }).compile();

    service = module.get<GapService>(GapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
