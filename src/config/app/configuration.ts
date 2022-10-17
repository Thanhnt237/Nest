import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    env: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
    secret_token: process.env.SECRET_TOKEN,
    refresh_secret_token: process.env.REFRESH_SECRET_TOKEN,
    cookie_secret: process.env.COOKIE_PARSER_SECRET
}));