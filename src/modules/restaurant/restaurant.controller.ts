import {
  Controller,
  Get,
  UseGuards,
  Version,
  Request,
  Query,
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
import { RestaurantService } from './restaurant.service';
import { SearchRestaurantsDto } from './dto/restaurant.dto';
import { RestaurantHistory } from 'src/db/restaurant/entities/restaurant-history.entity';
import {
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Controller('restaurant')
@ApiTags('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

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
  async findByCoordinates(
    @Query()
    { radius, latitude, longitude }: SearchRestaurantsDto,
    @Request() req,
  ): Promise<any> {
    try {
      const { sub } = req.user;
      const result = await this.restaurantService.searchByCity(
        sub,
        radius,
        latitude,
        longitude,
      );
      return result;
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(ErrorCodesEnum.TBA016, error);
    }
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
  async findHistory(@Request() req): Promise<RestaurantHistory[]> {
    try {
      const { sub } = req.user;
      return this.restaurantService.getHistoryByUser(sub);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(ErrorCodesEnum.TBA015, error);
    }
  }
}
