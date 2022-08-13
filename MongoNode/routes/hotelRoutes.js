import express from "express";

const router = express.Router();

import { hotelData,getSpecificHotel } from '../controllers/hotels.js';

router.get('/', hotelData);
router.get('/:id', getSpecificHotel);


export default router;

