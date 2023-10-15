import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import "./db";
import authRouter from "./routes/auth-router";

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("short"));


app.use("/api/v1/auth", authRouter);

app.listen(1234, () => {
    console.log(`[Server]: Node server running on port: 1234`);
});
