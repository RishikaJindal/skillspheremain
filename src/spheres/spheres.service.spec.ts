import { Test, TestingModule } from '@nestjs/testing';
import { SpheresService } from './spheres.service';

describe('SpheresService', () => {
  let service: SpheresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpheresService],
    }).compile();

    service = module.get<SpheresService>(SpheresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
