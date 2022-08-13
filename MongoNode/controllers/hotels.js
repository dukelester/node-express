import {db} from '../app.js'
import { ObjectId } from 'mongodb';


export const hotelData = (req, res) =>{
    const page = req.query.page || 0;
    const hotelsPerPage = 50;
    const skipHotels = page * hotelsPerPage;

    let hotels = [];
    db.collection("hoteldata") //cursor toArray for each
    .find()
    .sort({name:1}).skip(skipHotels)
    .limit(hotelsPerPage)
    .forEach((hotel) =>{
        hotels.push(hotel)
    }).then(() =>{
        res.status(200).json(hotels)
    }).catch((err) =>{
        res.status(500).json(err)
    });
};

export const getSpecificHotel = (req, res) =>{
    const { id } = req.params;

    if(ObjectId.isValid(id)){
        console.log(id)
        db.collection('hoteldata')
        .findOne({ _id: ObjectId(id) })
        .then((hotel) =>{
            res.status(200).json(hotel); //return a response with the data
        })
        .catch((err) =>{
            res.status(404).json({err: "We could not find the requested Hotel"});
        });
        
    }else{
        res.status(400).json({message: "Invalid id"})
    }
};


export const addNewHotel = (req, res) =>{
    const book = req.body;
    db.collection("hoteldata")
    .insertOne(book)
    .then ((result) =>{
        res.status(201). json(result);
    }).catch((err) =>{
        res.status(500).json({err: "We could not add the new Hotel"});
    })

};

export const deleteHotel = (req, res) =>{
    const { id } = req.params;

    if( ObjectId.isValid(id)){
        db.collection('hoteldata')
        .deleteOne({_id : ObjectId(id)})
        .then((result) =>{
            res.status(200).json(result);
        }).catch((err) =>{
            res.status(404).json({err: "We could not find the requested Hotel to delete"});
        });

    }else{
        res.status(400).json({err: "Invalid id"});
    }
};

export const updateHotel = (req, res) =>{
    const { id } = req.params;
    // const { Name, Place, Type, Price, ReviewsCount, Rating, City, State } = req.body;
    const updates = req.body;
    if(ObjectId.isValid(id)) {
        db.collection("hoteldata").updateOne({_id: ObjectId(id)}, {$set: {...updates}})
        .then((hotel)=>{
            res.status(200).json(hotel);
        }).catch((err) =>{
            res.status(404).json({err: "We could not find the requested Hotel to update"});
        });
    }else{
        res.status(400).json({err: "Invalid id"});
    }
};
