import {db} from '../app.js'
import { ObjectId } from 'mongodb';


export const hotelData = (req, res) =>{
    let hotels = [];
    db.collection("hoteldata") //cursor toArray for each
    .find().sort({name:1}).forEach((hotel) =>{
        hotels.push(hotel)
    }).then(() =>{
        res.status(200).json(hotels)
    }).catch((err) =>{
        res.status(500).json(err)
    });
};

export const getSpecificHotel = (req, res) =>{
    const { id } = req.params;
    console.log(id)
    db.collection('hoteldata')
    .findOne({ _id: ObjectId(id) })
    .then((hotel) =>{
        res.status(200).json(hotel); //return a response with the data
    })
    .catch((err) =>{
        res.status(404).json({err: "We could not find the requested Hotel"});
    });
          
};