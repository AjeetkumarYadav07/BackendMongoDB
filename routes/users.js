const mongoose =require ("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/firstdb");

const userschema = mongoose.Schema({
   username: String,
   name: String,
   age: Number,
   user : String ,
});

 module.exports = mongoose.model("user" , userschema);