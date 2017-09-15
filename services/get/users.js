var random = require('mockjs').Random;

var user = {
    path: '/user',
    template: {
        id: function() {
            return random.id()
        },
        name: function() {
            return random.cname()
        },
        avatar: function() {
            return random.image()
        },
        city: function() {
            return random.city()
        },
    },
    cache: false
};

var users = {
    path: '/users',
    collection: true,
    template: user.template,
    size: 5
};

module.exports = [user, users];
