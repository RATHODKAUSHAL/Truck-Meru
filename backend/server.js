//making basic server

import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import 'dotenv/config'
import CityRouter from "./routes/CityRoute.js"
import userRouter from "./routes/userRoute.js"

const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())

//Database Connected
connectDB();

//api endpoint
app.use("/api/city", CityRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter )


//show api is working
app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port,() => {
    console.log(`server started on http://localhost:${port}`)
})

