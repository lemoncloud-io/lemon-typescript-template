import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/hello', (_: Request, res: Response) => {
    res.json({
        result: 'Hello Typescript!!',
    });
});

export default router;
