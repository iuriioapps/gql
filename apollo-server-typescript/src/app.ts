import { Express } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import { healthCheck, headers, rateLimit, ssl } from './startup';

import gqlServer from './apollo';

const app: Express = express();
import 'express-async-errors';

app.use(bodyParser.json());
app.use(compression());

healthCheck(app);
headers(app);
rateLimit(app);
ssl(app);

gqlServer.applyMiddleware({ app, path: '/graphql' });

export default app;
