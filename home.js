const exp=require("express")
const cors=require("cors")
const bodyParser = require('body-parser')
const fu=require("express-fileupload");

const app=exp();

app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(fu());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://volken300:7551030254@cluster0.yrn6mnb.mongodb.net/formsubmitdb?retryWrites=true&w=majority');

const frm=require("./routes/form");

app.get("/",(req,res)=>{
    res.send("my server running");
});

app.use("/fr",frm);

app.listen(8000); 