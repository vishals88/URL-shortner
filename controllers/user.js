const models = require('../models'); 

exports.signUp = async (req, res) => {
    const { userName, email, password } = req.body;
    const newusers = await models.User.create({userName: userName,email: email,password: password})
    if (!newusers) {
        return res.status(402).json({ message: 'User not created' })
    }
    return res.status(200).json({ message: 'User created successfully' })
}

exports.logIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        return res.status(400).json({ message: 'Please enter your email and password' })
    }
    const userData = await models.User.findOne({
        where: {
            email: email,
        }
    })
    if (!userData) {
        return res.status(400).json({ message: 'Email is Invalid' })
    }
    let checkPassword = await userData.comparePassword(password);

    if (checkPassword) {
        let { token, decoded } = helper.createToken(userData)
        return res.status(200).json({
            message: 'Login Successfully',
            token: token
        })
    } else {
        return res.status(400).json({ message: 'Invalid Credentials' })
    }

}