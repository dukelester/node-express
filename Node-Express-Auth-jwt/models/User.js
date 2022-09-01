import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import validator from 'validator';
import bcryptjs from 'bcryptjs'

// TODO: Create a Schema for the user
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'please enter a valid email'],
        unique:[true, 'The email must be unique'],
        lowercase:true,
        validate:[validator.isEmail, 'Please enter a valid email!']
        },
    password:{
        type:String,
        required:[true, 'The password is a required'],
        minLength:[8, 'the minimum length of the password is 8 characters'],
    },
});

userSchema.plugin(uniqueValidator, { message: 'this email has been taken, please use another one! '});

// events after saving
userSchema.post('save',function(doc, next){
    next()
    console.log('new user was created', doc)
});

// events before saving the user
userSchema.pre('save', function (next){
    console.log('user about to be created and saved ', this);
    const salt =  bcryptjs.genSaltSync();
    this.password = bcryptjs.hashSync(this.password, salt)
    next()
    
});

// static method for user login
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if (user) {
        const auth = bcryptjs.compareSync(password, user.password);
        if(auth){
            return user;
        }
        throw Error("Incorrect Password ... try again")

    }
    throw Error("User not found ... invalid email")
}
export const User = mongoose.model('authuser', userSchema);
