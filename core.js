const express = require('express');
const app = express();


const apihome = require('./routes-major/app-home.js');

app.use(express.json());

app.use('/home', apihome);

app.get('/',(req,res) => {
    res.send("Hello Multiverse!! \n this code is working!");
});
 const PORT = 80
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));