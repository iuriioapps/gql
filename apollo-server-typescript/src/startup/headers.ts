import helmet from 'helmet';
import cors from 'cors';
import nocache from 'nocache';
import { Express } from 'express';

export default (app: Express) => {
    const dev = app.get('env') !== 'production';

    // Apply security headers provided by helmet.
    app.use(helmet());
    app.use(helmet.referrerPolicy());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.expectCt({ maxAge: 0 }));
    app.use(helmet.featurePolicy({
        features: {
            syncXhr: ["'none'"]
        }
    }));

    if (dev) {
        app.use(nocache());
    }

    // Apply CORS.
    const corsOptions = {
        origin: '*',
        methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 200
    };

    if (dev) {
        // Needed only for GraphQL schema explorer to work (in dev mode).
        corsOptions.allowedHeaders.push('X-Apollo-Tracing');
    }

    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));

    app.enable('trust proxy');
    app.set('trust proxy', 2);

    app.use((req, res, next) => {
        const serverName: string = process.env.SERVER_NAME || 'Battlestar Galactica';
        res.setHeader('Server', serverName);
        next();
    });
};
