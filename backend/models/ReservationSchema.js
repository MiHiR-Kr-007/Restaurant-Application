import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : [2 , "First name must contain atleast 2 characters."],
        maxLength : [30, "First name cannot contain more than 30 characters."]
    },
    lastName : {
        type : String,
        required : true,
        minLength : [2 , "First name must contain atleast 2 characters."],
        maxLength : [30, "First name cannot contain more than 30 characters."]
    },
    date : {
        type : String,
        reqired : true
    },
    time : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please provide a valid email address."]
    },
    phone : {
        type : String,
        required : true,
        minLength : [10, "Phone number must contain 10 digits."],
        maxLength : [10, "Phone number must contain 10 digits."]
    }
});

export const ReservationSchema = mongoose.model("ReservationSchema", reservationSchema);