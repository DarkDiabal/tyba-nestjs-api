import { ErrorCodesEnum } from './erro-codes.enum';
import { IErrorCodes } from './error.codes.interface';

export const errorCodesLocal: IErrorCodes[] = [
  {
    code: ErrorCodesEnum.TBA001,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo createUser en AuthDbService. posiblemente problemas con postgres',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA002,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => createUser/AuthDbService. posiblemente problemas con postgres',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA003,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'El usuario ya se encuentra registrado, metodo => createUser/AuthService ',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA004,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => createUser/AuthService. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA005,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => createUser/AuthController. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
];
