import { Module } from '@nestjs/common';
import { RestaurantDbService } from './restaurant.service';
import { RestaurantHistory } from './entities/restaurant-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantHistory])],
  exports: [RestaurantDbService],
  providers: [RestaurantDbService],
})
export class RestaurantDbModule {}
