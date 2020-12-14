// Express stuff
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import bodyparse from 'body-parser';

// Internal stuff
import web from './controller/web';

const port: number = 5002;
const ip: string = '192.168.1.210';

const app: express.Application = express();
const server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
  origin: true,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
  ],
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'OPTIONS',
  ],
  credentials: true,
}));

app.disable('x-powered-by');

app.use(bodyparse.json({
  type: 'application/json', limit: '2mb',
}));

app.use(web());

server.listen(port, ip, () => {
  console.log(`App listening @ [${ip}:${port}]`);
});
