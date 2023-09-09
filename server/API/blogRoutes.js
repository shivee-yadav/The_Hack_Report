import express from "express";
import { BlogModel , validate} from "../Database/Blog/Blog";

const Router = express.Router();

Router.get("/", async(req,res,next) => {
    let blogs;
    try {
        blogs = await BlogModel.find(); 
    } catch (error) {
        return console.log(error)
        
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs found"})
    }
    return res.status(200).json({blogs});
})

export default Router;