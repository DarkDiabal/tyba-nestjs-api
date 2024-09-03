import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

@Module({
  imports: [AuthModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class TybaServiceModule {}
