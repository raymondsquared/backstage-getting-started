import dotenvx from '@dotenvx/dotenvx';

import path from 'path';

import CustomError from './error';
import logger from './logger';
import { getName } from './utils';

let dotenvxConfig: dotenvx.DotenvConfigOptions = {};
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  dotenvxConfig = {
    path: path.resolve('.', `.env.${process.env.NODE_ENV}`),
    override: true,
  };
}
dotenvx.config(dotenvxConfig);

const name = getName();
console.log(`Hello from ${name}`);

logger.info(`Hello again from ${name}, random words: ${process.env.FOO}`);
logger.error(new CustomError('Fake error', 1000000));
