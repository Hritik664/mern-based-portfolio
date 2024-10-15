const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')

// dotenv configuration
dotenv.config();


//rest object
const app = express();


// midlewares
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname,'./hritik-singh/build')))

// routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));

app.get('*',function (req,res){
    res.sendFile(path.join(__dirname,'./hritik-singh/build/index.html'))
});

// ports
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
});