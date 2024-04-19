import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    rowNo : {
        type : Number,
        required : true
    },
    street : {
        type : String,
        required : true
    },
    city : {
       type : String,
       required : true
    },
    state : {
        type : String,
        required : true 
    },
    pincode : {
       type : String,
       required : true
    }
})

const hospitalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : addressSchema,
        required : true
    },
    specializedIn : [
        {
            type : String
        }
    ]


} , {timestamps : true});

export const Hospital = mongoose.model("Hospital" , hospitalSchema);