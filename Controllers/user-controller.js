const User = require("../models/user-model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const home = async (req, res) => {
    try {
        res.status(200).send("welcome to home2 ");
    } catch (error) {
        console.log(error);
    }
}

const signup = async (req, res) => {
    try {
        const { firstname, lastname, username, email, phone, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "somethig is missing",
                success: false
            })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ Msg: "email already exists", success: false })
        }
        saltround = 10;
        const hash_password = await bcrypt.hash(password, saltround);
        // await User.deleteMany({})
        await User.create({ firstname, lastname, username, email, phone, role, password: hash_password });
        res.status(201).json({
            msg: "registration succesfull",
            success: true
        });
    } catch (error) {
        res.status(400).send({ Msg: "page not found" })
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                msg: "somethig is missing",
                success: false
            })
        }
        const userExist = await User.findOne({ email })
        // console.log(userExist)
        if (!userExist) {
            return res.status(400).json({ msg: "Incorrect email or password", success: false })
        }
        // if (role !== userExist.role) {
        //     return res.status(400).json({
        //         message: "Account doesn't exist with current role ",
        //         success: false
        //     })
        // }
        const passwordmatch = await bcrypt.compare(password, userExist.password);
        const token = jwt.sign(
            { email: userExist.email, id: userExist._id, role: userExist.role },
            "abcd",
            { expiresIn: '24h' }
        )
        if (passwordmatch) {
            res.status(200).cookie(
                "token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, samSite: 'strict' }).json({
                    msg: "login succesfull",
                    token,
                    email,
                    userExist,
                    success: true
                })
        } else res.status(401).json({ message: "invalid email or password " });
    } catch (error) {
        res.status(400).json({ msg: "login page not found" })
    }
}

const logout = async (req, res) => {
    try {
        res.status(200).json({ message: "logout confirm", user: req.user })
        console.log(req.user)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { home, signup, login, logout }
