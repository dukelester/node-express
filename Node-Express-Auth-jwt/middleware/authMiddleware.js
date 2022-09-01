import jwt from 'jsonwebtoken';
import {User} from '../models/User.js'


export const requireAuth = (req, res, next) => {
    const token = req.cookies.JWT;

    // check for the token
    if(token){
        jwt.verify(token,'this is my secret my lester duke lestervbnm', (err, decodedToken) =>{
            if(err){
                console.log(err);
                res.redirect('/login')
            }else{
                console.log(decodedToken);
                next()
            }
        })

    } else{
       res.redirect('/login');
    }
}

// check current user

export const checkUser =  (req,res, next) => {
    const token = req.cookies.JWT;
    if(token){
         jwt.verify(token,'this is my secret my lester duke lestervbnm', async (err, decodedToken) =>{
            if(err){
                console.log(err);
                res.locals.user = null;
                next();
            }else{
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else{
        res.locals.user = null;
        next();
    }
}