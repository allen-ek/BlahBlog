const { User } = require('../models');

const userData = [{
        username: 'Allen',
        password: 'allen'

    },
    {
        username: 'John',
        password: 'john'
    },
    {
        username: 'Greg',
        password: 'greg'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;