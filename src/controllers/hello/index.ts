import { Request, Response, Router } from 'express';
var a = 123;
const router: Router = Router();

router.get('/hello', (_: Request, res: Response) => {
    res.json({
        result: 'Hello World!',
    });
});

export default router;
