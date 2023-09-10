require("dotenv").config();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/nutrifit-api", {useNewUrlParser:true, useUnifiedTopology:true, autoIndex:true});

// mongoose.connect(`mongodb+srv://Nutrifit123:Nutrifit369@cluster0.urccrhz.mongodb.net/nutrifit-api?retryWrites=true&w=majority`, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

// mongoose.connect(`mongodb+srv://arindam369:<password>@cluster0.hspwrdh.mongodb.net/?retryWrites=true&w=majority`, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hspwrdh.mongodb.net/nutrifit-api?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true});