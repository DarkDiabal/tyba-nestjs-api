import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import serviceConfiguration from 'src/config/service-configuration';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        store: redisStore,
        host: serviceConfiguration().redis.redis_host,
        port: serviceConfiguration().redis.redis_port,
        ttl: serviceConfiguration().redis.redis_ttl,
      }),
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
