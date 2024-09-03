import { Test, TestingModule } from '@nestjs/testing';
import { AuthDbService } from './auth.service';

describe('AuthService', () => {
  let service: AuthDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthDbService],
    }).compile();

    service = module.get<AuthDbService>(AuthDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
