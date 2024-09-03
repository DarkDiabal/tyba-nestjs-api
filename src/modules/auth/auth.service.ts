import { Injectable } from '@nestjs/common';
import { AuthDbService } from 'src/db/auth/auth.service';
import { GeneralDataResponse, UserDto } from './dto/user.dto';

import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';
import serviceConfiguration from 'src/config/service-configuration';
import {
  CustomBadRequestException,
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';

@Injectable()
export class AuthService {
  constructor(private readonly userDbService: AuthDbService) {}

  async createUser(user: UserDto): Promise<GeneralDataResponse> {
    try {
      const userExist = await this.userDbService.validateUserExist(user.email);

      if (userExist) {
        throw new CustomBadRequestException(
          ErrorCodesEnum.TBA003,
          'The user is already registered.',
        );
      }

      await this.userDbService.createUser({
        id: uuidv4(),
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: await bcrypt.hash(
          user.password,
          Number(serviceConfiguration().auth.number_hash_rounds),
        ),
      });

      const response = new GeneralDataResponse({
        data: {
          message: `The user ${user.email} has been successfully created.`,
        },
      });

      return response;
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(
        ErrorCodesEnum.TBA004,
        error.message,
      );
    }
  }
}
