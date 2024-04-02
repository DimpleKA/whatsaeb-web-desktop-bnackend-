const express = require('express');
const cors = require('cors'); // Importing CORS middleware
const bodyParser = require('body-parser'); // Importing body-parser middleware
const dbConnect = require('./db');
const UserRouter = require('./routes/userRoutes');
const MessageRouter = require('./routes/messageRoutes');
const app = express();

// Connect to the database
dbConnect();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/message',MessageRouter);
app.use('/user',UserRouter);

app.listen(4000,()=>{
console.log("your server is running at : http://localhost:4000/")
});