require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';

import googleAuthConfig from "./config/google.config";

import User from "./API/User/index";
import Auth from "./API/Auth/index";

const session = require('express-session');

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    family: 4
  }).then(() => console.log('DB Connected'));
  

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));
app.use(passport.initialize());
app.use(passport.session());

googleAuthConfig(passport);

//API calls
app.use("/auth", Auth);
app.use("/user", User);

app.get("/", (req,res) => {
    res.json({message: "SetUp Success yayy!!!"});
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("Server is up and running"));
