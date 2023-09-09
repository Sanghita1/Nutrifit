require("dotenv").config();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/wisemeal-api", {useNewUrlParser:true, useUnifiedTopology:true, autoIndex:true});

mongoose.connect(`mongodb+srv://Nutrifit123:${process.env.MONGOOSE_PASS}@cluster0.urccrhz.mongodb.net/nutrifit-api?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})