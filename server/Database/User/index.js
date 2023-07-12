import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,//trims whitespaces from before and after
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    address: [{
        deatil:{type: String},
       for:{type:String}
    }],
    //salt: String,//long unique string used to generate the hashed password
    role: {
        type: Number,
        default:0//user:0(default) , admin:1
    },
   phoneNumber:[{type:Number}]
},
{ timestamps : true }//automatically created and updated
);

export const UserModel = mongoose.model("Users", userSchema);