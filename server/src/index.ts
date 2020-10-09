import http from "http";

import {app} from "./app";

const httpPort = process.env.HTTP_PORT || 8881;

const httpServer = http.createServer(app);
httpServer.listen(httpPort);

/*import https from'https';
import fs from 'fs';

const privateKey  = fs.readFileSync('sslcert/selfsigned.key', 'utf8');
const certificate = fs.readFileSync('sslcert/selfsigned.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const httpsPort = process.env.HTTPS_PORT || 8444;
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(httpsPort);*/
