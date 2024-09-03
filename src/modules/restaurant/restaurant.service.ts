import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/db/redis/redis.service';
import { RestaurantHistory } from 'src/db/restaurant/entities/restaurant-history.entity';
import { RestaurantDbService } from 'src/db/restaurant/restaurant.service';
import { RestaurantServiceDtoResponse } from 'src/providers/google/dto/restaurant.dto';
import { GoogleService } from 'src/providers/google/services/google.service';
import {
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Injectable()
export class RestaurantService {
  constructor(
    private googleService: GoogleService,
    private readonly restaurantDbService: RestaurantDbService,
    private redisService: RedisService,
  ) {}

  async searchByCity(
    userId: string,
    radius?: number,
    latitude?: number,
    longitude?: number,
  ): Promise<RestaurantServiceDtoResponse[]> {
    try {
      this.restaurantDbService.saveHistory({
        radius: radius,
        latitude: latitude.toString(),
        longitude: latitude.toString(),
        userId: userId,
      });

      const isCachedValue = await this.redisService.getCache(
        `${radius}#${latitude}#${longitude}`,
      );

      if (!isCachedValue) {
        const response = await this.googleService.searchByCity(
          radius,
          latitude,
          longitude,
        );

        await this.redisService.setCache(
          `${radius}#${latitude}#${longitude}`,
          response,
          86400,
        );
        return response;
      }
      return isCachedValue;
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(
        ErrorCodesEnum.TBA013,
        error.message,
      );
    }
  }

  async getHistoryByUser(userId: string): Promise<RestaurantHistory[]> {
    try {
      return this.restaurantDbService.getHistoryByUser(userId);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(
        ErrorCodesEnum.TBA014,
        error.message,
      );
    }
  }
}
