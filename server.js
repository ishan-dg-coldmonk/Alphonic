import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import path from "path";

//routes path
import authRoutes from "./routes/authRoutes.js";
import openAIRoutes from "./routes/openaiRoutes.js";

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

// static files access
app.use(express.static(path.join(__dirname,'./client/build')))

//API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openAIRoutes);

app.get('*', function(res,req){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

//listen server
app.listen(PORT, () => {
    
});