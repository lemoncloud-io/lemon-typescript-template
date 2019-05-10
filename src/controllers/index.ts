import { Router } from 'express';

import helloRouter from './hello';
import jsRouter from './hello-js';

const router: Router = Router();

router.use('/', helloRouter);
router.use('/js', jsRouter);

export default router;
