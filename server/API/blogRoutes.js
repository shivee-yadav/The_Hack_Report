import express from "express";
import { BlogModel , validate} from "../Database/Blog/Blog";
import { UserModel } from "../Database/User";
import mongoose, { mongo } from "mongoose";

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validObjectId = require("../middleware/validObjectId");


const Router = express.Router();

//getting all the blogs
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

//adding a blog

Router.post("/add", auth ,async(req,res,next) => {
   const { title, description, image, user} = req.body;

   let existingUser;

   try {
    existingUser = await UserModel.findById(user);
    
} catch (error) {
    return console.log(error)
    
}

if(!existingUser){
    return res.status(400).json({message:"Unable to find User"});
}

   const blog = new BlogModel({
    title,
    description,
    image,
    user,
   });

   try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session})
    await session.commitTransaction();
   } catch (error) {
    console.log(error);
    return res.status(500).json({message: error});

   }

   
    
    return res.status(200).json({blog});
})

//updating a blog by it's id and user authentication

Router.put("/update/:id",[validObjectId,auth], async(req,res,next) => {

   const { title, description, image} = req.body;
   const blogId = req.params.id;
   let blog;
   

    try {
        blog = await BlogModel.findByIdAndUpdate(blogId, {
            title,
            description,
            image,
           });

    } catch (error) {
        return console.log(error)
        
    }
    if(!blog){
        return res.status(500).json({message:"Unable to update the blog"})
    }
    
    return res.status(200).json({blog});
})

//getting a blog by it's id

Router.get("/:id", validObjectId, async(req,res,next) => {
    const id=req.params.id;
    let blog;
    try {
        blog = await BlogModel.findById(id);
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(404).json({message:"No blog found"})
    }
    
    return res.status(200).json({blog});
})

//deleting a blog by it's id and user's authentication
Router.delete("/:id",[validObjectId,auth], async(req,res,next) => {
    const id=req.params.id;
    let blog;
    try {
        blog = await BlogModel.findByIdAndDelete(id);
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(500).json({message:"Unable to delete"})
    }
    
    return res.status(200).json({message:"Successfully deleted"});
})

export default Router;