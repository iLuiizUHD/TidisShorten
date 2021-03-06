import { Router } from 'express';
import ShortenDB from './db/db';

const sdb = new ShortenDB();

export default () => {
  const router = Router();

  router.get('/', (req, res, next) => {
    res.status(200).json({ success: true });

    next();
  });

  router.get('/:url', (req, res, next) => {
    res.status(200).json({ ih: 'hihi' });

    next();
  });

  router.post('/', (req, res, next) => {
    res.status(200).json({ ih: 'hihi' });

    next();
  });

  return router;
};
