import * as dotenv from 'dotenv';
import * as path from 'path';

const filename = process.env.NODE_ENV === 'test' ? 'test.env' : 'dev.env';
const tsPath = path.resolve(__dirname, `../../../${filename}`);

export const enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};

dotenv.config({ path: tsPath });
