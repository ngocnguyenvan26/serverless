import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});
export default {
  port: process.env.APP_PORT,
  portSchedule: process.env.APP_PORT_SCHEDULE || '2021',
};

export const PAGE_SIZE = {
  Standand: 10,
  Products: 2,
};