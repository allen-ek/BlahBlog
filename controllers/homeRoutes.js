const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router()
router.get("/", (req, res) => {
    Post.findAll({
      include: [User],
    })
      .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
  
        res.render('homepage', { posts });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  module.exports = router;