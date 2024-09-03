import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tybaConfig } from './config/tyba.orm.config';
import { ConfigModule } from '@nestjs/config';
import serviceConfiguration, {
  enviroments,
} from './config/service-configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [serviceConfiguration],
    }),
    AuthModule,
    RestaurantModule,
    TypeOrmModule.forRootAsync({
      useFactory: tybaConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class TybaServiceModule {}
