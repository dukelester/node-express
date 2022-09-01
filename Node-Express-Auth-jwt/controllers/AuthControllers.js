import { User } from "../models/User.js"
import jwt  from 'jsonwebtoken';
// import { db } from '../app.js'
// handle errors
const handleErrors = (err) => {
    // console.log(err.message, err.code)
    let errors = { email:'', password:'' };

    if(err.code === 11000) {
        errors.email = 'The email has been taken already !';
        return errors
    }

    // incorrect email
    if (err.message === 'incorrect email'){
        errors.email = "The email is not registered .."
    }

    // incorrect password
    if(err.message === "incorrect password") {
        errors.password = 'The password is incorrect'
    }

    // validation errors
    if(err.message.includes('validation failed')){
        Object.values(err.errors).forEach(({ properties }) =>{
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

// create token for 3 days
const maxAge = 3 * 24 * 60 * 60; 
const createToken = (id) => {
    return jwt.sign({ id }, 'this is my secret my lester duke lestervbnm', {
        expiresIn:maxAge
    });
}

export const signUpController = (req, res) =>{
    // res.send('get user register form')
   res.render('signup');

}

export const signUpPostController =  (req, res) => {
    const { email, password } = req.body
    try {
    User.create({ email, password })
    .then((user) => {
        const token = createToken(user._id);
        res.cookie('JWT', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user:user._id });
    })
    .catch((err) => {
        // console.log(err.message)
       const errors =  handleErrors(err);
        res.status(400).json(errors)
    });

    } catch (err) {
        console.log(err.message,'error occurred');
        res.status(400).json(err);
    }
}

export const signInController = (req, res) =>{
   
    // res.send('get the sign in page')
    res.render('login')
    
}
export const signInPostController = async (req, res) =>{
    const { email, password } = req.body
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('JWT', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id })
        console.log(user)

    } catch(err){
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

export const logout = (req, res) => {
    res.cookie('JWT', '', { maxAge:1 });
    res.redirect('/');

}
