import express from "express";
import passport from "passport";

const Router = express.Router();


/*
Route          /google
Des             google signin 
Params         None
Access         Public
Method         GET
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      

    ]
}));

/*
Route      /google/callback
Descrip    google signin callback
Params     None
Access     Public
Method     GET
*/

Router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/"
}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
}

);


export default Router;
