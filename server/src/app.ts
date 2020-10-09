import path from 'path';

import * as bodyParser from 'body-parser';
import cors from 'cors';
import express, {Handler} from 'express';
import helmet from 'helmet';

const staticDir = path.resolve(__dirname + '/../');

const middlewares: Handler[] = [
  cors(),
  bodyParser.urlencoded({extended: true}),
  bodyParser.json(),
  express.static(staticDir),
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
        blockAllMixedContent: [],
      },
    },
  }),
];

export const app = express();
app.use([...middlewares]);
