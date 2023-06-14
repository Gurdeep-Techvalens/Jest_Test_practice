const mongoose = require("mongoose")
const User = require("../../model/user")
const databaseName = 'socialmedia_test'

// const url = process.env.DATABASETEST
//    mongoose.connect(url, { useNewUrlParser: true }).then(a=>{console.log("Test DB connected!")})

let useroneid = new mongoose.Types.ObjectId()
let usertwoid = new mongoose.Types.ObjectId()
let useronedata  = {
    _id : useroneid ,
    socialid : "1234567891234567891",
    name : "Akash Verma",
    email : "av@gmail.com",
    picture : "http://randomurl.com",
    provider : "google"
}

let usertwodata  = {
    _id : usertwoid ,
    socialid : "9123456789112345678",
    name : "Prem Kuamr",
    email : "premprem@gmail.com",
    picture : "http://randomurlurlrandom.com",
    provider : "facebook"
}
const setupDB = async()=>{

 await User.deleteMany()
 const userone = new User(useronedata)
 const usertwo = new User(usertwodata)
 await userone.save()
 await usertwo.save()
  
}
module.exports = {
  useroneid,usertwoid,useronedata,usertwodata,setupDB
}

