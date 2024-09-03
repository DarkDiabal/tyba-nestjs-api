import { DataSource } from 'typeorm';
import { config } from './src/config/tyba.orm.config';

export default new DataSource(config);
