import express from 'express';
import { Router, Express, Request, Response, NextFunction, ErrorRequestHandler, RequestHandler } from 'express-serve-static-core';
import * as http from 'http';
import * as https from 'https';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as fs from 'fs';
import { Server } from 'net';
import { IWebServerConfig, IStaticFileConfig } from '../../config/index';

export { Router, Express, Request, Response, NextFunction, ErrorRequestHandler, RequestHandler } from 'express-serve-static-core';
export const GetRouter = express.Router;

export class WebServer {
    public Config: IWebServerConfig;
    public App: Express;
    public Server: Server;

    constructor(webconfig: IWebServerConfig) {
        var self = this;
        self.Config = webconfig;
        self.App = express();
    }

    public Init(): WebServer {
        var self = this;
        self.App.set('port', self.Config.ApiPort);
        self.App.use(logger('dev'));
        self.App.use(cookieParser());
        self.App.use(bodyParser.json({ limit: '2mb' }));
        self.App.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }));
        return self;
    }

    public AddStaticFileRouting(route: string, path: string, config: IStaticFileConfig): void {
        var self = this;
        // Fix undefined path concatenation
        const targetPath = path || '';
        self.App.use(route, express.static(targetPath, config));
        console.log('Route Name: %s Path: %s', route, targetPath);
    }

    public AddApiRouting(route: string, router: Router): void {
        var self = this;
        self.App.use(route, router);
    }

    public Start(): WebServer {
        let self = this;
        
        // Register 404 and error handlers LAST, right before listening
        self.registerModules();

        if (self.Config.IsHttpsEnabled) {
            console.log('https - Enabled');
            let privateKey = fs.readFileSync(self.Config.HttpsKeypath, 'utf8');
            let certificate = fs.readFileSync(self.Config.HttpsCertificatepath, 'utf8');
            let credentials = { key: privateKey, cert: certificate };
            self.Server = https.createServer(credentials, self.App as any);
        } else {
            console.log('http - Enabled');
            self.Server = http.createServer(self.App as any);
        }
        self.Server.listen(self.Config.ApiPort, undefined, (self.listenerCallback).bind(self));
        return self;
    }

    public Stop(callback?: (err?: Error) => void): WebServer {
        let self = this;
        if (this.Server) {
            this.Server.close(callback);
        }
        console.log('Express server stop');
        return self;
    }

    public HandlerFor404: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
        let err = new Error('Resource Not Found.');
        next(err);
    }

    public ErrorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
        console.error(err);
        res.status(404).json({ error: err.message || err });
    }

    private registerModules(): void {
        var self = this;
        // 404 handler and error middleware must be attached after all routes are registered
        self.App.use(self.HandlerFor404);
        self.App.use((self.ErrorHandler).bind(self));
    }

    private listenerCallback(): void {
        var self = this;
        let port = self.App.get('port');
        console.log('Express server listening on port :' + port);
        console.log('Application Path :' + __dirname);
        console.log('Environment :' + (process.env.NODE_ENV || 'development'));
    }
}