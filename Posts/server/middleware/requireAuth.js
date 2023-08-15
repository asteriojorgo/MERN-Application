const jwt = require('jsonwebtoken');
const User = require('../models/user')

const requireAuth = async (req, res, next) => {
    try {
        // get token off cookies
        const token = req.cookies.Authorization
        // decode the token
        const decoded = jwt.verify(token, process.env.SECRET);
        // make sure token not expired
        if (Date.now() > decoded.exp) return res.sendStatus(401);
        // find user off sub
        const user = await User.findById(decoded.sub);
        if (!user) return res.sendStatus(401);
        // attach use to request
        req.user = user;
        // continue
        next();
    } catch (err) {
        return res.sendStatus(401);
    }
};

module.exports = requireAuth;