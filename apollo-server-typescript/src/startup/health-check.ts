import { Express } from 'express';

export default (app: Express) => {
    app.use('/healthCheck', (req, res) => {
        res.status(200).send('healthy');
    });
};
