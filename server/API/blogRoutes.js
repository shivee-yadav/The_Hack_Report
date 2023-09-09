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

Router.post("/add",async(req,res,next) => {
   const { title, description, image, user} = req.body;
   const blog = new BlogModel({
    title,
    description,
    image,
    user,
   });

    try {
        await blog.save(); 
    } catch (error) {
        return console.log(error)
        
    }
    
    return res.status(200).json({blog});
})

Router.put("/update/:id",async(req,res,next) => {

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

Router.get("/:id", async(req,res,next) => {
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


Router.delete("/:id", async(req,res,next) => {
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