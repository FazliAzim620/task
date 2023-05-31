const mongoose=require('mongoose');
export const connectDB=async()=>{
try {
   const {connection} = await mongoose.connect('mongodb://localhost:27017/worksheet')
   console.log(`Database connected on ${connection.host}`)
} catch (error) {
    console.log("Error",error)
}}