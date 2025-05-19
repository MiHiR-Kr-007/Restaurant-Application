import ErrorHandler from "../middlewares/error.js";
import {ReservationSchema} from "../models/ReservationSchema.js";

const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, date, time, phone } = req.body;
    if(!firstName || !lastName || !email || !date || !time || !phone){
        return next(new ErrorHandler("Please fill the full reservation form !", 400));
    }

    try{
        await ReservationSchema.create({firstName, lastName, email, date, time, phone});
        res.status(201).json({
            success : true,
            message : "Reservation Sent Successfully !"
        });
    }
    catch (error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(', '), 400));
        }

        return next(error);
    }
};

export default sendReservation;