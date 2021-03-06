const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes/route');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const usersController = require("./controllers/users");

app.set('views', path.join(__dirname, 'views'));
//set view engine to ejs
app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static(__dirname + '/public'));

//Initiate bodyParser to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'limsnodejsapp',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    console.log("req.session.user = ", req.session.user)
    console.log("req.cookies.user_sid = ", req.cookies.user_sid)
    if (req.session.user && req.cookies.user_sid) {
        next();
    } else {
        res.render('pages/login');
    }
};

app.post('/login', async (req, res) => {
    console.log('Request for post login page recieved = ', req.body);
    const users = await usersController.isValidLogin(req, res);
    console.log("app isValidLogin = ", users)
    if (users) {
      req.session.user = users
      res.status(200).json({ "message": "Login Success!" });
    }
    res.status(401).json({ "message": "Login Failed!" });
  });

app.use('/', sessionChecker, routes);

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

// Run server
console.log("Server is listening...")
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));