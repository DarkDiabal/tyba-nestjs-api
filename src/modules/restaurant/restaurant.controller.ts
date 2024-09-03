import {
  Body,
  Controller,
  Get,
  UseGuards,
  Version,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD_ERROR,
  UNAUTHORIZED_ERROR,
} from 'src/shared/errors/response-errors';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';

@Controller('restaurant')
@ApiTags('restaurant')
export class RestaurantController {
  @UseGuards(JwtAuthGuard)
  @Version('1')
  @ApiOperation({
    summary: 'find by coodinates',
    description: 'method to search for nearby restaurants by coordinates',
  })
  @ApiBadRequestResponse({
    description: INVALID_PAYLOAD_ERROR,
  })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @ApiUnauthorizedResponse({
    description: UNAUTHORIZED_ERROR,
  })
  @Get()
  async findByCoordinates(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }

  @UseGuards(JwtAuthGuard)
  @Version('1')
  @ApiOperation({
    summary: 'history by user',
    description: 'method to list transactions by user',
  })
  @ApiBadRequestResponse({
    description: INVALID_PAYLOAD_ERROR,
  })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @ApiUnauthorizedResponse({
    description: UNAUTHORIZED_ERROR,
  })
  @Get('history')
  async findHistory(@Request() req): Promise<string> {
    const { username } = req.user;
    return `Hola ${username}`;
  }
}
