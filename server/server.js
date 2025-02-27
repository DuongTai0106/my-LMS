import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

//Express
const app = express();

//Connect DB
await connectDB();

//middlwares
app.use(cors());

//Routes
app.post("/clerk", express.json(), clerkWebhooks);

//Port
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
