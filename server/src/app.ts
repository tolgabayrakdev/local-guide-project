import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true}));
app.use(morgan("combined"));

app.listen(1234, () => {
    console.log(`[Server]: Node server running on port: 1234`);
})

