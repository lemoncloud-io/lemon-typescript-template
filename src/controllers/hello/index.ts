import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get(
    '/hello',
    (_: Request, res: Response): void => {
        res.json({
            result: 'Hello World!',
        });
    },
);

export default router;
