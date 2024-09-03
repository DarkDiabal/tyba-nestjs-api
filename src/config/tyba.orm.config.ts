import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import './env/env.config';
import serviceConfiguration from './service-configuration';
const hasSSL = process.env.DB_SSL_ENABLED?.toLowerCase() === 'true';
export type ConnectionOptions = PostgresConnectionOptions &
  TypeOrmModuleOptions & { seeds: string[] };

const overwriteConfig = {};

if (hasSSL) {
  const configSSL = {
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
  Object.assign(overwriteConfig, configSSL);
}

export const tybaConfig = (): ConnectionOptions => ({
  type: 'postgres',
  name: 'tyba',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: serviceConfiguration().database.typeorm_tyba_username,
  password: serviceConfiguration().database.typeorm_tyba_password,
  database: serviceConfiguration().database.typeorm_tyba_database,
  synchronize: false,
  logging: process.env.NODE_ENV === 'development' ? true : false,
  entities: [__dirname + '/../db/**/**/*.entity.[tj]s'],
  migrations: [__dirname + '/../db/migration/**/*.[tj]s'],
  seeds: [__dirname + '/../db/seeds/**/*.[tj]s'],
  ssl: false,
  extra: {
    poolSize: parseInt(process.env.DB_POOL_SIZE, 10),
    connectionTimeoutMillis: parseInt(
      process.env.DB_CONNECTION_TIME_OUT_MILLIS,
      10,
    ),
    query_timeout: parseInt(process.env.DB_QUERY_TIMEOUT, 10),
    statement_timeout: parseInt(process.env.DB_STATEMENT_TIMEOUT, 10),
  },
  keepConnectionAlive: true,
  ...overwriteConfig,
});

export const config = tybaConfig();
