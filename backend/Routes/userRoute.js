import express from "express"
import { getUserData } from "../Controllers/userControllers.js"
const router = express.Router()

router.use("/profile/:username",getUserData)

export default router