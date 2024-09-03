import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GoogleService } from './services/google.service';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
  exports: [GoogleService],
  providers: [GoogleService],
})
export class GoogleModule {}
