import redirectSSL from 'redirect-ssl';
import { Express } from 'express';

export default (app : Express) => {
    app.use(redirectSSL.create({ statusCode: 301 }));
};
