import express from 'express';
import { exploreRepos } from '../Controllers/exploreConroller.js';

const router = express.Router();

router.use("/repos/:language" , exploreRepos)

export default router