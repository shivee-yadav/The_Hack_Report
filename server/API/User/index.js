import express from "express";

import { UserModel } from "../../Database/User";

const Router = express.Router();

/*
Route          /
Des            Get user data
Params         _id
body           None
Access         Public
Method         GET
*/

Router.get("/:_id", async(req,res) => {
    try {

        const {_id} = req.params;
        const getUser = await UserModel.findById({ _id });

        return res.json({ user: getUser});
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
});

/*
Route          /update
Des            update user data
Params         _userId
body           user data
Access         Public
Method         PUT
*/

Router.put("/update/:_userId", async(req, res) => {
    try {

        const {userId} = req.params;
        const {userData} = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData,
            },
            {
                new: true,
            }
        );

        return res.json({ user: updateUserData});
        
    } catch (error) {

        res.status(500).json({error: error.message});
        
    }
});

export default Router;