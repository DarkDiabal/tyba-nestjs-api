import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDbModule } from 'src/db/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import serviceConfiguration from 'src/config/service-configuration';

@Module({
  imports: [
    AuthDbModule,
    JwtModule.register({
      secret: serviceConfiguration().auth.secret,
      signOptions: { expiresIn: serviceConfiguration().auth.token_expiration },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
