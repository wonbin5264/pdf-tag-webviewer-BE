import { Router } from 'express';

const folderRouter = Router();

folderRouter.get('/:path', (req, res) => {
  res.end(`${req.params.path}`);
});

export default folderRouter;
