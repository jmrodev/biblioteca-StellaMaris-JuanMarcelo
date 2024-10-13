import {date} from "@formkit/tempo";
import dbLocal from "db-local";

const{Schema} = new dbLocal({ path:"./databases"});
const Book = Schema ("Book",{
    _id:{type:Number,required:true},
    title:{type:String,required:true},
    author:{type:String,required:true},
    genre :{type:String,required:true},
    price :{type:String,required:true},
    year :{type:String,required:true},
    fecha_registro :{type:Date,required:true}
}) 
export default Book ;