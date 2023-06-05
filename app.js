require("dotenv").config();
const express = require("express");
const app = express();

const expressLayout = require("express-ejs-layouts");

app.use(express.static("public"));

//Templating engine
app.use(expressLayout);
app.set("layout","./layouts/main");
app.set("view engine","ejs");


//routes
const mainRoute = require("./server/routes/main");

app.use("/", mainRoute);



const port = process.env.PORT || 3000 ;

const start = async () => {
    try {
        app.listen(port, (req,res) => {
            console.log(`Server is live on port: ${port}`);
        })
    } catch (err) {
        console.error(err);
    }
}

start();