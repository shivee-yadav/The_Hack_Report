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

Router.get("/google/callback", 
passport.authenticate("google", {
  failureRedirect: "/login/failed",
  successRedirect: "http://localhost:3000",
})

);

// Router.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect(process.env.CLIENT_URL);
// });

// Router.get("/login/failed", (req, res) => {
// 	res.status(401).json({
// 		error: true,
// 		message: "Log in failure",
// 	});
// });



export default Router;
