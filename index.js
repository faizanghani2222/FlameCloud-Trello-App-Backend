const TelegramBot = require('node-telegram-bot-api')
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const userRouter=require("./src/User/User.Router")
const { addTask, deleteTask, addColumn, removeColumn, changeStatus } = require('./Components/Actions')
const handleBot = require('./Components/HandleBot')
require('dotenv').config();


const app=express();

const port=process.env.PORT || 8080
const Database=process.env.DATABASE
const token=process.env.TOKEN



// telegram bot 


const telegramBot = new TelegramBot(token, { polling: true })
telegramBot.on('message', (msg)=>handleBot(msg));



// express app for api


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",userRouter)

app.listen(port,async ()=>{
    await mongoose.connect(Database);
    console.log("started")
})
