import { Body, Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('restaurant')
@ApiTags('restaurant')
export class RestaurantController {
  @Version('1')
  @Get()
  async findByCoordinates(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }

  @Version('1')
  @Get('history')
  async findHistory(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }
}
