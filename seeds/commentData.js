const { Comment } = require('../models');

const commentData = [{
        comment_txt: "comment1",
        user_id: 1,
        post_id: 1
    },
    {
        comment_txt: "comment2",
        user_id: 2,
        post_id: 2
    },
    {
        comment_txt: " comment3",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;