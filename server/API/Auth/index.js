import express from "express";
import passport from "passport";

import { UserModel } from "../../Database/User";
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

const Router = express.Router();

/*
Route          /signup
Des            signup with email and password
Params         NOne
Access         Public
Method         POST
*/

Router.post("/signup", async(req,res) => {
    try {

       await ValidateSignup(req.body.credentials);

       await UserModel.findEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJwtToken();

        return res.status(200).json({ token });
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
});

/*
Route          /signin
Des            signin with email and password
Params         NOne
Access         Public
Method         POST
*/

Router.post("/signin", async(req,res) => {
    try {

       await ValidateSignin(req.body.credentials);

       const user =await UserModel.findEmailAndPassword(req.body.credentials);

        const token = user.generateJwtToken();

        return res.status(200).json({ token, status:"success" });
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
});

/*
Route          /google
Des             google signin 
Params         None
Access         Public
Method         GET
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
}));

/*
Route      /google/callback
Descrip    google signin callback
Params     None
Access     Public
Method     GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
}

);



export default Router;