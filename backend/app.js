import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { dbConnection } from "./database/dbConnection.js";
import router from "./routes/reservationRoute.js";
import { errorMiddleWare } from "./middlewares/error.js";

const app = express();
dotenv.config();

app.use(
    cors({
        origin : [process.env.FRONTEND_URL],
        methods : ["POST"],
        credentials : true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/reservation", router);
app.get("/", (req, res, next) => {
    return res.status(200).json({
        sucess : true,
        message : "Hello World"
    })
})

dbConnection();

app.use(errorMiddleWare);

export default app;
