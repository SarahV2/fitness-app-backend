const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = function (req, res, next) {
    //Get the token from the header of the request
    const token = req.header('x-auth-token')

    //Check if a token exists
    if (!token) {
        return res.status(401).json({ message: 'No token found. Authorization denied' })
    }

    // Vertify the recieved token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')) //decode the token
        req.user = decoded.user;
        next(); //move to the next middleware

    } catch (error) {
        res.status(401).json({ message: 'Invalid Token' })
    }
}