const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        // get email, password off req.body
        const { email, password } = req.body;

        // hash password
        const hashedPassword = bcrypt.hashSync(password, 8);
        // post the data to the database
        await User.create({ email, password: hashedPassword });

        res.sendStatus(200);
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
};

const login = async (req, res) => {
    try {
        // get the email & password off of req.body
        const { email, password } = req.body;

        // find user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.sendStatus(401)
        }
        // compare passwords to verify if user signing is legit
        const comparePasswords = bcrypt.compareSync(password, user.password);
        if (!comparePasswords) {
            return res.sendStatus(401)
        }

        // create a json web token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

        res.cookie('Authorization', token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        })

        console.log(res)
        res.sendStatus(200)
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const logOut = (req, res) => {
    try {
        res.clearCookie('Authorization');
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const testRoute = (req, res) => {
    console.log(req.user)
    res.sendStatus(200);
};

module.exports = {
    signUp,
    login,
    logOut,
    testRoute
};
