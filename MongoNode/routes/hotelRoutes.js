import express from "express";

const router = express.Router();

import { hotelData,getSpecificHotel,addNewHotel,deleteHotel,updateHotel } from '../controllers/hotels.js';

router.get('/', hotelData);
router.get('/:id', getSpecificHotel); //get the hotel with the id
router.post('/', addNewHotel); //posting data
router.delete('/:id',deleteHotel); //delete the hotel with the id
router.patch('/:id', updateHotel); //update the hotel with the id


export default router;

