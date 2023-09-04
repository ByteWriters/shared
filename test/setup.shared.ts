import { config as loadEnvFile } from 'dotenv';
import { resolve } from 'path';

const projectRoot = resolve(__dirname, '../../..');
const getEnvFile = (rel_path: string) => `${projectRoot}/${rel_path}/.env`

const envFiles = [
  '.',
  'docker/influxdb',
  'docker/postgres',
  'docker/redis',
  'docker/server'
].map(getEnvFile);

const overrides = {
  DB_HOST: 'localhost',
  INFLUX_HOST: 'localhost',
  REDIS_HOST: 'localhost',
}

if (!process.env.POSTGRES_PASSWORD) {
  for (const path of envFiles) loadEnvFile({ path });

  for (const [ key, value ] of Object.entries(overrides)) {
    process.env[key] = value;
  }
}
