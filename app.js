const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')


const app = express();




const publicDirectory = path.join(__dirname, './public')
const privateDirectory = path.join(__dirname, './private')
app.use(express.static(publicDirectory));
app.use(express.static(privateDirectory));
app.use(express.static('upload'))
app.use(fileUpload())
// Parse URL_encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// require json.decode
app.use(express.json({ limit: "1mb" }))
app.use(cookieParser());
app.set("view engine", "hbs");


app.use("/", require("./routes/pages"));
const port = 5001 || process.env.PORT;

app.listen(port, () => {
    console.log("Server started on port " + port)
})
