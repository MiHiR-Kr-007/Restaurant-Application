import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName : "Reservations"
        })
        .then(() => {
            console.log("Successfully connected to Database.");
        })
        .catch((error) => {
            console.log(`There is an error while connecting with database : ${error}`);
        });
};
