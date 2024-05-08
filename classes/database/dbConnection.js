import mongoose from "mongoose";

 export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURENT",
    })
    .then(() => {
      console.log("connected to database succesfully");
    }).catch((err)=>{
console.log(`some error occured ${err}`)
    })
};

