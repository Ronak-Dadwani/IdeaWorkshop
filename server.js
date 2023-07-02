const express = require("express");
const serverConfig = require('./configs/server.config')
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.configs');
const userModel = require("./Models/user.model");


const app = express();

/**
 * Logic to connect to MongoDb and create an Admin  user
 * need to have the mongod up  and runnicg in local machine
 * 
 */

mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection ; 

db.on("error", ()=>{
  console.log("Error while connecting to DB");

}) ;

db.once("open" , ()=>{
  console.log("DB is connected");

  init();
});

 async function init() {
  /**
   * Initialize the mongo db
   * 
   * Need to creae the Admin User
   * 
   */

  /**
   * check if the admin user is already present in it or not  
   */
  let admin = await userModel.findOne({
      userID : "admin"
  });

     admin = await userModel.create({
    name : "Ronak dadwani" ,
    userID : "admin",
    email : "rdadwani@gmail.com" ,
    userType : "ADMIN",
    password : "Welcome1"
  });

  console.log(admin);
}







app.listen(7777, (serverConfig , PORT) => {
  console.log("server started");
});
