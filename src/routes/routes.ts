import { Router } from 'express';
import * as pageControler from '../controllers/pageController';
import * as searchControler from '../controllers/searchController';

const router = Router();

router.get('/', pageControler.home);
router.get('/dogs', pageControler.dogs);
router.get('/cats', pageControler.cats);
router.get('/fishes', pageControler.fishes);


router.get('/search', searchControler.search);

export default router;