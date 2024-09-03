import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SearchRestaurantsDto {
  @IsString()
  @ApiProperty()
  radius?: number;

  @IsString()
  @ApiProperty()
  latitude?: number;

  @IsString()
  @ApiProperty()
  longitude?: number;
}
