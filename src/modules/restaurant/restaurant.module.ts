import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { JwtModule } from '@nestjs/jwt';
import serviceConfiguration from 'src/config/service-configuration';
import { HttpModule } from '@nestjs/axios';
import { GoogleModule } from 'src/providers/google/google.module';
import { RedisModule } from 'src/db/redis/redis.module';
import { RestaurantDbModule } from 'src/db/restaurant/restaurant.module';

@Module({
  imports: [
    JwtModule.register({
      secret: serviceConfiguration().auth.secret,
      signOptions: { expiresIn: serviceConfiguration().auth.token_expiration },
    }),
    HttpModule,
    GoogleModule,
    RedisModule,
    RestaurantDbModule,
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
