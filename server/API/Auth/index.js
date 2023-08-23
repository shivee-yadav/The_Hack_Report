import express from "express";
import passport from "passport";

import { UserModel , validate} from "../../Database/User";
//import { ValidateSignup, ValidateSignin } from "../../validation/auth";
const bcrypt = require("bcrypt");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const validObjectId = require("../../middleware/validObjectId");

const Router = express.Router();

/*
Route          /signup
Des            signup with email and password
Params         NOne
Access         Public
Method         POST
*/

Router.post("/signup", async(req,res) => {
    const { error } = validate(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });

	const user = await UserModel.findOne({ email: req.body.email });
	if (user)
		return res
			.status(403)
			.send({ message: "User with given email already Exist!" });

	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	let newUser = await new UserModel({
		...req.body,
		password: hashPassword,
	}).save();

	newUser.password = undefined;
	newUser.__v = undefined;
	res
		.status(200)
		.send({ data: newUser, message: "Account created successfully" });
});

/*
Route          /signin
Des            signin with email and password
Params         NOne
Access         Public
Method         POST
*/

Router.post("/signin", async (req, res) => {
	const user = await UserModel.findOne({ email: req.body.email });
	if (!user)
		return res.status(400).send({ message: "invalid email or password!" });

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword)
		return res.status(400).send({ message: "Invalid email or password!" });

	const token = user.generateAuthToken();
	res.status(200).send({ data: token, message: "Signing in please wait..." });
});

//get all users
Router.get("/", admin, async (req, res) => {
    const users = await UserModel.find().select("-password -__v");
    res.status(200).send({data:users});

})

//get user by id
Router.get("/:id", [validObjectId,auth], async (req, res) => {
    const user = await UserModel.findById(req.params.id).select("-password -__v");
    res.status(200).send({data:user});

})

//update user by id
Router.put("/:id", [validObjectId,auth], async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        { new: true}
        ).select("-password -__v");
    res.status(200).send({data:user});

})

//delete user by id
Router.delete("/:id", [validObjectId,auth], async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "Successfully deleted"});

})



export default Router;
