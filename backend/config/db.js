// const mongoose = require ('mongoose');

// const connectDB = async ()=>{
//     try{
//         mongoose.set("strictQuery",false)
//         mongoose.connect(process.env.MONGO_URI,()=>
//         console.log("Mongo connecté! "));
//     }catch(err){
//         console.log(err);
//         process.exit();
//     }
// };


// module.exports = connectDB;


const mysql = require('mysql2');

// Créez une connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost', // host mysql
    user: 'root', // username
    password: '', // password
    database: 'Node_db' //  base de données
});

// Connectez-vous à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL avec l\'ID de connexion', connection.threadId);
});

module.exports = connection;
