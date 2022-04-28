const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

module.exports = {
    register: async (request, response) => {
        const { name, email, password } = request.body;

        try {
            if (await User.findOne({ email })) {
                return response.status(400).send({ error: "User already exists" });
            }

            const user = await User.create({
                name,
                email,
                password
            });

            user.password = undefined;

            return response.status(201).send({
                user,
                token: generateToken({ id: user.id })
            });
        } catch (error) {
            console.error(error);
            return response.status(400).send({ error: "Registration Failed" });
        }
    },

    authenticate: async (request, response) => {
        const { email, password } = request.body;

        try {
            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return response.status(400).send({ error: "User not found" });
            }

            if (!await bcrypt.compare(password, user.password)) {
                return response.status(400).send({ error: "Invalid password" });
            }

            user.password = undefined;

            return response.send({
                user,
                token: generateToken({ id: user.id})
            });
        } catch {
            return response.status(400).send({ error: "Login Failed" });
        }
    }
}