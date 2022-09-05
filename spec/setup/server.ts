import path from 'node:path';
import dotenv from 'dotenv';
import './modules/remix-node';
import './modules/fetch';
import './modules/form-data';
import './modules/console';

dotenv.config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`)
});