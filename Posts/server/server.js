// require environment variables
require("dotenv").config();

// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const postsController = require('./controllers/posts');
const usersController = require('./controllers/users');
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth')

// Create an express app
const app = express()

// configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}));

// Connect to database
connectToDb();

// Routes - Posts
app.get('/posts', requireAuth, postsController.getAllPosts);

app.get('/posts/:id', requireAuth, postsController.getPostById)

app.post('/posts', requireAuth, postsController.createPost)

app.put('/posts/:id', requireAuth, postsController.updatePost);

app.delete('/posts/:id', requireAuth, postsController.deletePost);

// Routes - Users
app.post('/signup', usersController.signUp);

app.post('/login', usersController.login);

app.get('/logout', usersController.logOut);

app.get('/testroute', requireAuth, usersController.testRoute);

// Start server & listen for requests
app.listen(process.env.PORT)