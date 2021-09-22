const jwt = require('jsonwebtoken');

/* Creating Token */
exports.createToken = ({ id, email, name }) => {
    const token = jwt.sign({
        id: id,
        email: email,
        userNname: userName
    }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_TIME })
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return { token, decoded }
}