import { Injectable } from '@nestjs/common';
import { RestaurantHistory } from './entities/restaurant-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomInternalServerException } from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Injectable()
export class RestaurantDbService {
  constructor(
    @InjectRepository(RestaurantHistory)
    private restaurantRepository: Repository<RestaurantHistory>,
  ) {}

  async saveHistory(
    restaurantHistory: RestaurantHistory,
  ): Promise<RestaurantHistory> {
    try {
      const newUser = this.restaurantRepository.create(restaurantHistory);
      return this.restaurantRepository.save(newUser);
    } catch (error) {
      throw new CustomInternalServerException(ErrorCodesEnum.TBA011, error);
    }
  }

  async getHistoryByUser(userId: string): Promise<RestaurantHistory[]> {
    try {
      return await this.restaurantRepository.find({
        where: { userId },
      });
    } catch (error) {
      throw new CustomInternalServerException(ErrorCodesEnum.TBA012, error);
    }
  }
}
