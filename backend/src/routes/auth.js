/*
 * refresh token can only be create if user already sign in.
 * user login into account they will give server username and pass
 * then server will check user by compare name as password in server (password in server is already hashed)
 * then after login, sever will give user acess token so they can use to verify themself
*/

import express from 'express';
import jwt from "jsonwebtoken";
import 'dotenv' from "dotenv";
dotenv.config();

//this should be replace with database

let posts = [
  {
    username: "Tony",
    password: "Tonydeptrai",
  }
  , {
  username: "Levan",
  password:"Levancutevadep",
}
]

//this should only give back password
app.get("/posts"), (req, res)=>{

}

function authenticateToken(req, res, next){
  const authHeader = re.headers("auth")
}

