import * as dotenv from 'dotenv';
import * as path from 'path';

const filename = process.env.NODE_ENV === 'test' ? 'test.env' : 'dev.env';
const tsPath = path.resolve(__dirname, `../../../${filename}`);
dotenv.config({ path: tsPath });

export const enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};

export default () => {
  return {
    service: {
      node_env: process.env.NODE_ENV,
      type: process.env.SERVICE_TYPE,
      name: process.env.SERVICE_NAME,
      port: process.env.TYBA_SERVICE_PORT,
    },
    database: {
      typeorm_host: process.env.TYPEORM_HOST,
      typeorm_port: process.env.TYPEORM_PORT,
      typeorm_tyba_username: process.env.TYPEORM_TYBA_USERNAME,
      typeorm_tyba_password: process.env.TYPEORM_TYBA_PASSWORD,
      typeorm_tyba_database: process.env.TYPEORM_TYBA_DATABASE,
      db_rotating_key: process.env.DB_ROTATING_KEY,
      db_connection_refresh_minutes: process.env.DB_CONNECTION_REFRESH_MINUTES,
      db_ssl_enabled: process.env.DB_SSL_ENABLED,
    },
  };
};
