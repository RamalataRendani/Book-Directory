var express = require('express');
var cors = require('cors');

//create express app
var app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}
console.log('Books directory is running');

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));


//create root route
app.get('/',(req,res) => {
    res.json({message: 'Welcome to the books directory'})
});

//import  bookDir routes file
const  bookDirRoutes = require('./app/routers/bookDir.route');

//create bookDir routes
app.use('/api',bookDirRoutes);

//setup server port
const PORT = process.env.PORT || 8081;

//listen to the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:8081`);
});