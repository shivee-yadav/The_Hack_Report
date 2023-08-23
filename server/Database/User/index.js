const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	address: [{
        deatil:{type: String},
       for:{type:String}
    }],
    phoneNumber:[{type:Number}],
	isAdmin: { type: Boolean, default: false },
},
{ timestamps : true }//automatically created and updated
);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, name: this.name, isAdmin: this.isAdmin },
		process.env.JWTPRIVATEKEY,
		{ expiresIn: "7d" }
	);
	return token;
};

const validate = (user) => {
	const schema = Joi.object({
		name: Joi.string().min(5).max(10).required(),
		email: Joi.string().email().required(),
		password: passwordComplexity().required(),
		address: Joi.array().items(Joi.object({details: Joi.string(), for: Joi.string()})),
        phoneNumber: Joi.array().items(Joi.number())


		
	});
	return schema.validate(user);
};

const UserModel = mongoose.model("Users", userSchema);

module.exports = { UserModel, validate };