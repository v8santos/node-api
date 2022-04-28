const User = require('../models/User');

module.exports = {
    getAll: async (request, response) => {
        const users = await User.find({});
        
        return response.json(users);
    },
}