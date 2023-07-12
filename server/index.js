require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());

app.get("/", (req,res) => {
    res.json({message: "SetUp Success yayy!!!"});
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("Server is up and running"));
