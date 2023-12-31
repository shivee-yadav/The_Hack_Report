require('dotenv').config();
require("express-async-errors");

import express from 'express';
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';

import googleAuthConfig from "./config/google.config";

import Auth from "./API/Auth/index";
import googleAuth from "./API/Auth/googleAuth";
import blogRoutes from "./API/blogRoutes";

const session = require('express-session');
const connection = require("./db");

const app = express();

connection();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials: true,
}));

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
app.use("/api", Auth);
app.use("/", googleAuth);
app.use("/blog", blogRoutes);

app.get("/", (req,res) => {
    res.json({message: "SetUp Success yayy!!!"});
});

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log("Server is up and running"));
