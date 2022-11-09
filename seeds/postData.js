const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        text: 'This is post 1 text',
        user_id: 1

    },
    {
        title: 'Post 2',
        text: 'This is post 2 text',
        user_id: 2
    },
    {
        title: 'Post 3',
        text: 'This is post 3 text',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;