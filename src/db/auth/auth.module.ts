import { Module } from '@nestjs/common';
import { AuthDbService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [AuthDbService],
  providers: [AuthDbService],
})
export class AuthDbModule {}
