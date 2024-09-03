import { Body, Controller, Post, Version } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GeneralDataResponse, SignInDto, SignUpDto } from './dto/user.dto';
import {
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD_ERROR,
} from 'src/shared/errors/response-errors';
import { AuthService } from './auth.service';
import {
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Version('1')
  @ApiOperation({
    summary: 'sign up',
    description: 'method for create a new user',
  })
  @ApiBadRequestResponse({
    description: INVALID_PAYLOAD_ERROR,
  })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @Post('sign-up')
  async signUp(@Body() user: SignUpDto): Promise<GeneralDataResponse> {
    try {
      return await this.authService.createUser(user);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(ErrorCodesEnum.TBA005, error);
    }
  }

  @Version('1')
  @ApiOperation({
    summary: 'sign in',
    description: 'method for sign in with a user exist',
  })
  @ApiBadRequestResponse({
    description: INVALID_PAYLOAD_ERROR,
  })
  @ApiInternalServerErrorResponse({
    description: INTERNAL_SERVER_ERROR,
  })
  @Post('sign-in')
  async signIn(@Body() user: SignInDto): Promise<GeneralDataResponse> {
    try {
      return this.authService.signIn(user);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(ErrorCodesEnum.TBA006, error);
    }
  }

  @Version('1')
  @Post('sign-out')
  async signOut(@Body() hello: string): Promise<string> {
    return `${hello}`;
  }
}
