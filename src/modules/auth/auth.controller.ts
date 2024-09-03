import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @Version('1')
  @Post('sign-up')
  async signUp(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }

  @Version('1')
  @Post('sign-in')
  async signIp(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }

  @Version('1')
  @Post('sign-out')
  async signOut(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }
}
