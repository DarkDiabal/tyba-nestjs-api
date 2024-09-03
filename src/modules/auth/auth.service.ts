import { Injectable } from '@nestjs/common';
import { AuthDbService } from 'src/db/auth/auth.service';
import { GeneralDataResponse, SignInDto, SignUpDto } from './dto/user.dto';

import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';
import serviceConfiguration from 'src/config/service-configuration';
import {
  CustomBadRequestException,
  CustomException,
  CustomInternalServerException,
} from 'src/shared/errors/custom-exceptions';
import { ErrorCodesEnum } from 'src/shared/errors/erro-codes.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userDbService: AuthDbService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: SignUpDto): Promise<GeneralDataResponse> {
    try {
      const userExist = await this.userDbService.validateUserExist(user.email);

      if (userExist) {
        throw new CustomBadRequestException(
          ErrorCodesEnum.TBA003,
          'The user is already registered.',
        );
      }

      const newUser = await this.userDbService.createUser({
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

      const token = this.jwtService.sign({
        username: newUser.email,
        sub: newUser.id,
      });

      const response = new GeneralDataResponse({
        data: {
          message: `The user ${user.email} has been successfully created.`,
          token,
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

  async signIn(user: SignInDto): Promise<GeneralDataResponse> {
    try {
      const userExist = await this.userDbService.validateUserExist(user.email);

      if (!userExist) {
        throw new CustomBadRequestException(
          ErrorCodesEnum.TBA007,
          'The user is not registered',
        );
      }

      const isCorrectPassword = await bcrypt.compare(
        user.password,
        userExist.password,
      );

      if (!isCorrectPassword) {
        throw new CustomBadRequestException(
          ErrorCodesEnum.TBA009,
          'Incorrect username or password',
        );
      }

      const response = new GeneralDataResponse({
        data: {
          message: `Session started successfully`,
          token: this.jwtService.sign({
            username: user.email,
            sub: userExist.id,
          }),
        },
      });

      return response;
    } catch (error) {
      if (error instanceof CustomException) {
        throw error;
      }
      throw new CustomInternalServerException(
        ErrorCodesEnum.TBA008,
        error.message,
      );
    }
  }
}
