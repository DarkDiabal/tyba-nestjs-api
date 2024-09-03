import { Module } from '@nestjs/common';
import { RestaurantDbService } from './restaurant.service';

@Module({
  providers: [RestaurantDbService],
})
export class RestaurantModule {}
