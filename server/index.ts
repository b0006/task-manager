import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const port = parseInt(process.env.PORT || '', 10) || 3000;
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = express();

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });
