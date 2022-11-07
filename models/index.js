const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');
//user can have multiple posts
User.hasMany(Post,{
    foreignKey: 'user_id'
});
//post belongs to the user
Post.belongsTo(User,{
    foreignKey:'user_id',
    onDelete: 'cascade'
});
//comments can belong to a post and a user
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});
//user and post can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment }