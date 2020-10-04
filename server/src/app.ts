import path from 'path';
import * as bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import {expressCspHeader, INLINE, NONE, SELF} from 'express-csp-header';

const staticDir = path.resolve(__dirname + '/../');

export const app = express();

const setCORSHeaders = (req: any, res: any, next: any): any => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  next();
};

const middlewares: express.Handler[] = [
  bodyParser.urlencoded({extended: true}),
  bodyParser.json(),
  expressCspHeader({
    directives: {
      'connect-src': [SELF, INLINE, 'unsafe-eval', 'unsafe-inline', 'http://localhost:35729'],
      'default-src': [SELF],
      'script-src': [SELF, INLINE, 'unsafe-eval', 'unsafe-inline', 'http://localhost:35729'],
      'style-src': [SELF, INLINE, 'unsafe-eval', 'unsafe-inline', 'http://localhost:35729'],
      'img-src': ['data:'],
      'worker-src': [NONE],
      'block-all-mixed-content': true
    }
  }),
  helmet(),
  express.static(staticDir),
];

app.use([
  setCORSHeaders,
  ...middlewares
]);