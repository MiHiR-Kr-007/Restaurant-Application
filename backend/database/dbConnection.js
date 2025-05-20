import mongoose from "mongoose";

export const dbConnection = async () => {
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        console.log(`Successfully connected to the database.`);
    }
    catch(error){
        console.log(`There is an error while connecting with database : ${error}`);
    };
};