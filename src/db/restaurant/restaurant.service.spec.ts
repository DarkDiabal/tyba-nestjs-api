import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantDbService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantDbService],
    }).compile();

    service = module.get<RestaurantDbService>(RestaurantDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
