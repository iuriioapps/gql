import { Server } from 'http';

import app from './app';

async function start() {
    const HOST: string = process.env.HOST || '0.0.0.0';
    const PORT: number = parseInt(process.env.PORT || '7000');
    const server: Server = app.listen(PORT, HOST);

    console.log(`Server started on port: ${PORT}`);
}

process.on('unhandledRejection', ex => {
    throw ex;
});

start();
