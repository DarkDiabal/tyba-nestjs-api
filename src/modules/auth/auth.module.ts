import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDbModule } from 'src/db/auth/auth.module';

@Module({
  imports: [AuthDbModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
