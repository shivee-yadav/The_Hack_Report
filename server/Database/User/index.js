import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";
import  jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: {
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
    password: {
        type: String
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

userSchema.methods.generateJwtToken = function () {
    return jwt.sign({user: this._id.toString()}, "TheHackReport");
};

userSchema.statics.findEmailAndPhone = async({email, phoneNumber}) => {
    const checkUserByEmail = await UserModel.findOne({email});
    
    const checkUserByPhone = await UserModel.findOne({phoneNumber});

    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already Exists");
    }

    return false;

};

userSchema.statics.findEmailAndPassword = async({email, password}) => {
    const user = await UserModel.findOne({email});
    
    if(!user){
        throw new Error("User does not exists");
    }

    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if(!doesPasswordMatch){
        throw new Error("Invalid Password");
    }

    return user;

};

userSchema.pre("save", function(next){
    const user= this;

    if(!user.isModified("password")) return next();

    bcrypt.genSalt(8,(error,salt) => {
        if(error) return next(error);

        bcrypt.hash(user.password, salt , (error,hash) => {
            if(error) return next(error);

            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", userSchema);