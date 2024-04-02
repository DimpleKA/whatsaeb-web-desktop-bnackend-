const mongoose = require('mongoose');

let URI = "mongodb+srv://Dimpleusername:Dimple999@cluster0.l6frpvy.mongodb.net/webWhatsapp?retryWrites=true&w=majority&appName=Cluster0";
let dbConnect = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connnected to mongodb database");
    }catch(err){
        console.log("can not connect "+err);
    }
}

module.exports= dbConnect;