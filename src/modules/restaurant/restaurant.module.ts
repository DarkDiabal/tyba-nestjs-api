import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { JwtModule } from '@nestjs/jwt';
import serviceConfiguration from 'src/config/service-configuration';

@Module({
  imports: [
    JwtModule.register({
      secret: serviceConfiguration().auth.secret,
      signOptions: { expiresIn: serviceConfiguration().auth.token_expiration },
    }),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
