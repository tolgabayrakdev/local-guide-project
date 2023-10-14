import express, {Express} from "express";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(express.json());
app.use(cookieParser());


app.listen(1234,() => {
    console.log(`[Server]: Node server running on port: 1234`);

})

