import userRouter from './users.js'
import publicacion from './publicacion.js'
import commentsRouter from './comments.js';
import TrabajosRuter from './trabajo.js';

import express from 'express'
let router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/publicacion', publicacion)
router.use("/comments", commentsRouter);
router.use("/trabajos", TrabajosRuter);

export default router