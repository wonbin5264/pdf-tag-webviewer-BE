import express from 'express';
import dotenv from 'dotenv';

import indexRouter from '@routes/index';

dotenv.config();
const app = express();
const port = process.env.PORT;

// Set Routes
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`server running is ${port}...`);
});
