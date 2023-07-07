const express = require('express');
const cors = require('cors');
// const mysql = require('mysql');
// const axios = require('axios');
const app= express();
// cors({ origin: 'http://localhost:5000' })
app.use(cors());


// let con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'123456',
//     database: 'blog'
// });

app.get("/", (req, res) => {
    console.log("Index mein request aayi.")
    // con.connect((err)=> {
    //     if(err) throw err;
    //     console.log("Database is Connected.");

    // })

    
    const data = [
        {
            name: "Sara"
        },
        {
            name: "Conan"
        }
    ]
    // con.query("SELECT * FROM registeredUser", (err, results) => {
    //     console.log("conn query  agaye");
    //     if(err) throw err;
    //     console.log("Sending Results.")
    // })

    res.json(data);

    
})
app.listen(5000);