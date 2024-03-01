import express from 'express';
import { exploreRepos } from '../Controllers/exploreConroller.js';
import ensureAuthenticated from '../Middleware/makeSureAuth.js';

const router = express.Router();

router.use("/repos/:language", ensureAuthenticated , exploreRepos)

export default router