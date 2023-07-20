import joi from "joi";
import { UserModel } from "../Database/User";

const passwordPattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$');

export const ValidateSignup = (UserData) => {

    const Schema = joi.object({
        fullname: joi.string().required().min(3).max(32) ,
        email: joi.string().email() ,
        password: joi.string().pattern(passwordPattern).min(6).label("Password").messages({
            "string.pattern.base":
            "{#label} must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (#?!@$%^&*-).", 
        }) ,
        address: joi.array().items(joi.object({details: joi.string(), for: joi.string()})),
        phoneNumber:joi.number()


    });

    const { error } = Schema.validate(UserData, { abortEarly: false });
    if(error) {
        const errorMessage = error.details.map((err) => err.message).join("; ");
        throw new Error(errorMessage);
    }

    return UserData;
};

export const ValidateSignin = (UserData) => {

    const Schema = joi.object({

        email: joi.string().email().required() ,
        password: joi.string().pattern(passwordPattern).required().label("Password")
        .messages({
          "string.pattern.base":
            "{#label} must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (#?!@$%^&*-).",
        })
       

    });

    const { error } = Schema.validate(UserData, { abortEarly: false });
    if(error) {
        const errorMessage = error.details.map((err) => err.message).join("; ");
        console.log(errorMessage);
        throw new Error(errorMessage);
    }

    return UserData;
};