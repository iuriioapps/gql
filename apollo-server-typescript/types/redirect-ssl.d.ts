import { Request, Response, NextFunction } from 'express';

declare namespace RedirectSsl {
    interface Options {
        xForwardedProto?: boolean,
        redirectPort?: number,
        redirectHost?: string,
        redirectUnknown?: boolean,
        statusCode?: number,
        redirect?: boolean,
        exclude?: string[]
    }

    type Callback = (req: Request, res: Response, next?: NextFunction) => void;
}

declare var RedirectSsl: {
    create(options: RedirectSsl.Options): RedirectSsl.Callback;
};

export = RedirectSsl;
