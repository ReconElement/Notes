import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const router = express.Router();
import jwt from 'jsonwebtoken'

const JWT_secret = "OmkarAuthSecret";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const users = [];

router.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json("You're signed up!");

    console.log(users);
});

router.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: username,
            password: password,
            courses: []
        }, JWT_secret);

        res.json({
            token: token
        });
    }

    else{
        const reply = "Sign-in failed, please retry with correct username and password";
        res.send(reply);
    }
});

export {router};
