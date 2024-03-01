import express from "express"
import { getLikes, getUserData, likeProfile } from "../Controllers/userControllers.js"
import ensureAuthenticated from "../Middleware/makeSureAuth.js"
const router = express.Router()

router.use("/profile/:username",getUserData)
router.post("/like/:username" , ensureAuthenticated ,likeProfile)
router.get("/like" , ensureAuthenticated ,getLikes)

export default router