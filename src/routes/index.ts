import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.send('Pdf Webviewer Used Tag');
});

export default router;
