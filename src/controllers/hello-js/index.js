import { Router } from 'express';

const router = Router();

router.get('/hello', (_, res) => {
    res.json({
        result: 'Hello Javascript',
    });
});

export default router;
