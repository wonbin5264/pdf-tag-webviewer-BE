import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (_, res) => {
  res.send('Pdf Webviewer Used Tag');
});

export default indexRouter;
