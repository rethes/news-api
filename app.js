import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
app.use(logger('dev'));
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Catch all routes and redirect to the index file
app.get('*', (req, res) =>
  res.status(200).send({ message: 'Welcome to the default API route', })
);

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});

