import express from 'express';
import dotenv from 'dotenv';

import indexRouter from '@routes/index';
import folderRouter from './routes/folder';

dotenv.config();
const app = express();
const port = process.env.PORT;

// Set Routes
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/', indexRouter);
app.use('/folder', folderRouter);

app.listen(port, () => {
  console.log(`server running is ${port}...`);
});
