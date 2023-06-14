let mongoose = require("mongoose")
const User = require("../model/user")
const request = require("supertest")
const server = require("../server")
const paths = require("path")
const passport = require("passport")
require("dotenv").config({path:paths.join(__dirname,"../test.env")})
console.log(paths.join(__dirname,"../test.env"))
const {useronedata,useroneid,usertwodata,usertwoid,setupDB} = require("./fixtures/setup")
beforeEach(async () => {
    await mongoose.connection.close();
    await mongoose.connect(process.env.DATABASES);
    //console.log(process.env.DATABASES)
  });
beforeEach(setupDB)

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });
describe("Get apis",()=>{
    test("get user by social id", async()=>{
        let response = await request(server).get(`/getuser/${useronedata.socialid}`)
        //console.log(response)
        expect(response.body.provider).toBe("google")
        expect(response.body.email).toEqual('av@gmail.com')  
        expect(response.statusCode).toBe(200)
        expect(response).not.toBeNull()
        //expect(response.body.length).toBeGreaterThan(0);
    })
    test("get all users", async()=>{
        let response = await request(server).get(`/getusers`)
        //console.log(response)
        expect(parseInt(response.body.length)).toBeGreaterThan(0);
        expect(response.statusCode).toBe(200)
        expect(response).not.toBeNull()
        
        let u1 = await User.findById(response.body[0]._id)
        expect(u1.picture).toEqual(expect.any(String))
        expect(u1.email).toBe('av@gmail.com')
    }) 
    test("Add new user",async()=>{
        let response = await request(server).post('/adduser').send({
            socialid : '123134134314314134',
            name : 'Rakesh Singh',
            picture : 'https://asaffaf.com',
            email : 'rsrs@yahoo.in',
            provider: 'facebook'
        }).expect(200)
        //console.log(response)
    })   
})

// describe("Passport js Social media login",()=>{
//     test("login with google", async()=>{
//       const spy = jest.spyOn(passport, 'authenticate');
//       var mockReq = {
//         body: {
//           username: 'fakeymcfakeypants',
//           password: '123Skidoo'
//         },
//       logIn: function () {}
//       };
//         let response = await request(server).get(`/login/google`).send({
//             username:"gurdeep.techvalens@gmail.com",
//             password : "Gurdeep96$"
//         })
//         let resp = await request(server).get(`/google/callback`)
//         //console.log("Google",resp)
//     })
// })
