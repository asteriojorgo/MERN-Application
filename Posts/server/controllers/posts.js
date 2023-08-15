const Post = require('../models/post');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ posts: posts });
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};

const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        
        if (!post) {
            res.status(404).json({ error: 'post not found' });
        } else {
            res.json({ post: post });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({ title, content, user: req.user._id });
        res.json({ post: post });
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content } = req.body;

        const updatedPost = await Post.findOneAndUpdate({_id:postId, user: req.user._id}, { title, content }, { new: true });
        if (!updatedPost) {
            res.status(404).json({ error: 'post not found' });
        } else {
            res.json({ post: updatedPost });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await Post.deleteOne( {_id: postId, user: req.user._id});

        if (!deletedPost) {
            res.status(404).json({ error: 'post not found' });
        } else {
            res.json({ success: 'record deleted' });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};