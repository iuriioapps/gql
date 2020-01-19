import rateLimit from 'express-rate-limit';
import { Express } from 'express';

export default (app: Express) => {
    if (app.get('env') !== 'production') {
        console.info('Request limiter is disabled on non-production environments');
        return;
    }

    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100
    });

    app.use(limiter);
};
