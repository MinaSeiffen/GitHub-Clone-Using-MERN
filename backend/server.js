const port = 5000
import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import userRoutes from "./Routes/userRoute.js"
import exploreRoutes from "./Routes/exploreRoute.js"


dotenv.config();

const app = express()
app.use(cors())

app.use("/api/users" , userRoutes)
app.use("/api/explore" , exploreRoutes)

app.get("/", (req, res) => {
    res.send("server is ready")
})



app.listen(port , ()=>{
    console.log("Server running on Port : " + port);
})