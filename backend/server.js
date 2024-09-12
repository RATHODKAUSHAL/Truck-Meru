import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config';
import CityRouter from "./routes/CityRoute.js";
import userRouter from "./routes/userRoute.js";
import ReviewRouter from "./routes/ReviewRoute.js";
import authMiddleware from "./middleware/auth.js"; // Import the middleware
import FaqRouter from "./routes/FaqRoute.js";
import TransportRouter from "./routes/TransportRouter.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connected
connectDB();

// Apply the authentication middleware to routes that need protection
app.use("/api/user", userRouter); // Apply middleware to user routes
app.use("/api/review",  ReviewRouter); // Apply middleware to review routes
app.use("/api/faq",  FaqRouter);
app.use("/api/transport", TransportRouter)

app.get("/" , (req, res) => {
    res.send('Hello World')
})

// City routes (assuming these don't need authentication)
app.use("/api/city", CityRouter);

// @Serving static files in Express
//express.static is a in-built middleware function
app.use("/images", express.static('uploads'));

// Public endpoint
// app.get("/", (req, res) => {
//     res.send("API Working");
// });

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
