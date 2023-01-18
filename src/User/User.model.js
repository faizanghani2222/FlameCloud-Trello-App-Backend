const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String},
    id:{type:Number,required:true},
    tasks:{type:Array,default:[{title:"You can manage the board with @flamecloudTrelloBot from Telegram",status:"Todo"}]},
    columns:{type:Array,default:["Todo","In-Progress","Completed"]},
})

const User=mongoose.model("user",userSchema)

module.exports=User