import * as dotenv from 'dotenv';
import * as path from 'path';

const filename = process.env.NODE_ENV === 'test' ? 'test.env' : 'dev.env';
const tsPath = path.resolve(__dirname, `../../../${filename}`);

dotenv.config({ path: tsPath });
