import { Test, TestingModule } from '@nestjs/testing';
import { SpheresController } from './spheres.controller';

describe('SpheresController', () => {
  let controller: SpheresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpheresController],
    }).compile();

    controller = module.get<SpheresController>(SpheresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
