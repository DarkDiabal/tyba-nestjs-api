import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Primer nombre',
    example: 'Pedro',
    maxLength: 50,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Primer apellido',
    example: 'Pascal',
    maxLength: 50,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Correo electronico',
    example: 'pedro.pascal@yopmail.com',
    maxLength: 100,
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Numero de celular',
    example: '+573204578',
    maxLength: 20,
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: 'Contrasena',
    maxLength: 20,
  })
  @IsString()
  password: string;
}

export class GeneralMesaggeResponse {
  @ApiProperty({
    description: 'Mensaje indicando que que la solicito finalizo correctamente',
    example: 'Transacción exitosa',
  })
  message: string;
}
export class GeneralDataResponse {
  @ApiProperty({
    description: 'Datos de la respuesta del servicio',
  })
  data: GeneralMesaggeResponse;
  constructor(partial: Partial<GeneralDataResponse>) {
    Object.assign(this, partial);
  }
}
