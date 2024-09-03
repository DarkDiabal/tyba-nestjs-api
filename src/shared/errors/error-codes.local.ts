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
  {
    code: ErrorCodesEnum.TBA006,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => signIn/AuthController. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA007,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'El usuario no encuentra registrado, metodo => signIn/AuthService ',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA008,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => signIn/AuthService. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA009,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Usuario o contraseña incorrectos, metodo => signIn/AuthService. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA010,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'No se en cuentra logeado , por favor inicie sesion nuevamente',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA011,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo saveHistory en RestaurantDbService. posiblemente problemas con postgres',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA012,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo getHistoryByUser en RestaurantDbService. posiblemente problemas con postgres',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA013,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => searchByCity/AuthService. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA014,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => getHistoryByUser/AuthService. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA015,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => findHistory/AuthController. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
  {
    code: ErrorCodesEnum.TBA016,
    title: 'Presentamos Fallas',
    icon: 'error',
    description: 'Intente más tarde',
    technicalDetail: {
      description:
        'Error no controlado en el metodo => findByCoordinates/AuthController. revise la informacion e intente nuevamente.',
      recommendations: 'Intentar mas tarde',
    },
  },
];
