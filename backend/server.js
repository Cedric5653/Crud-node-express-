const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const port = 5000;
connectDB();

const app = express();


//middleware qui permet de traiter les donnée avec la req

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//appel de la route
app.use("api" , require("./routes/api.routes"));

//lancement du server
app.listen(port, ()=>console.log('server bien excecuter',port));