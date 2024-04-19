import mongoose from 'mongoose'

const hospitalDetails = new mongoose.Schema({
    hospitalName : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital",
    },
    numberOfHours : {
        type : Number,
        default : 1
    }
})

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    qualifications : {
        type : String,
        required : true
    },
    experienceInYears : {
        type : Number,
        default : 0
    },
    WorksInHospitals : [
        {
            type : hospitalDetails
        }
    ]

} , {timestamps : true});

export const Doctor = mongoose.model("Doctor" , doctorSchema);