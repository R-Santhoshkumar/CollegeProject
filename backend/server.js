const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const sequelize = require('./models/index');
const indexRoute = require('./route/index');
// const Session = require("./models/Session");
const CookieParser = require("cookie-parser");
// const multer = require('multer');
// const fs = require('fs');
// const xlsx = require('xlsx');
const session = require('express-session');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const helmet = require("helmet");
require('dotenv').config();

sequelize.authenticate().then(() => {
    console.log('Connection established Successfully');
    sequelize.sync()
}).catch(err => {
    console.log('Database is not connected');
});
// var salt = bcrypt.genSaltSync(10);
let app = express();

// let user = [];
app.use(cors());
app.use((req, res, next) => {
    next();
});
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SessionSEC,
    resave: false,
    saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());
app.use(helmet());

app.use('/api', indexRoute);
app.get('/', (req, res) => {
    res.send('<h1>Express is running...<h1>')
})
app.listen(5000, () => {
    console.log(`Server is running on port number 3000`);
})