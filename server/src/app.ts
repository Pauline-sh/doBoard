import path from 'path';
import * as bodyParser from 'body-parser';
import express, {Handler, NextFunction, Response, Request} from 'express';
import helmet from 'helmet';
// import {expressCspHeader, EVAL, INLINE, NONE, SELF} from 'express-csp-header';

const staticDir = path.resolve(__dirname + '/../');

const setCORSHeaders = (req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE, HEAD');
  next();
};

const setCSPHeaders = (req: Request, res: Response, next: NextFunction): void => {
  const csp = `
  connect-src: 'self';
  default-src: 'self';
  script-src: 'self' 'unsafe-inline' 'unsafe-eval' http://localhost;
  style-src: 'self';
  img-src: 'self';
  worker-src: 'self';
  `;
  res.header('Content-Security-Policy', csp);
  next();
};

const middlewares: Handler[] = [
  bodyParser.urlencoded({extended: true}),
  bodyParser.json(),
  /*expressCspHeader({
    directives: {
      'connect-src': [SELF, INLINE],
      'default-src': [SELF],
      'script-src': [SELF, INLINE, EVAL, 'http://localhost'],
      'style-src': [SELF, INLINE],
      'img-src': ['data:'],
      'worker-src': [NONE],
      'block-all-mixed-content': true
    }
  }),*/
  express.static(staticDir),
  helmet({
    contentSecurityPolicy: false,
  }),
];

export const app = express();
app.use([
  setCORSHeaders,
  ...middlewares,
  // setCSPHeaders,
]);
