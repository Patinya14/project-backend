const User = require('./user.model').User;
const mongoose = require('mongoose');
let service = {}

service.login = (login) => {

    return User.findOne({
        username: login.username,
        password: login.password
    })
}

module.exports = service


