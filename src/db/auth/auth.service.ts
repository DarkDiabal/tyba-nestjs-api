import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomInternalServerException } from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Injectable()
export class AuthDbService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    try {
      const newUser = this.userRepository.create(user);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new CustomInternalServerException(ErrorCodesEnum.TBA001, error);
    }
  }

  async validateUserExist(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: [{ email }],
      });
    } catch (error) {
      throw new CustomInternalServerException(ErrorCodesEnum.TBA002, error);
    }
  }
}
