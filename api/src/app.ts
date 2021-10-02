import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./routes/orderRouter";
import {testRouter} from "./routes/testRoute";

const app = express();
dotenv.config();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use("/testCode", testRouter);

app.listen(8081, () => {
console.log("Node server started running");
console.log(process.env.REACT_APP_CLIENT_ID);
});