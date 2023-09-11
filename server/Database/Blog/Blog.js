const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
	description: { type: String,  required: true },
	image: { type: String },
    user: {type: mongoose.Types.ObjectId,ref:"Users", required: true}
},
{ timestamps : true }//automatically created and updated
);



const validate = (blog) => {
	const schema = Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),
		image:Joi.string()
	});
	return schema.validate(blog);
};

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = { BlogModel, validate };