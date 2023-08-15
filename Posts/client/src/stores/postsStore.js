import { create } from 'zustand'
import axios from 'axios';

const postsStore = create((set) => ({
    notes: null,

    createForm: {
        title: '',
        content: ''
    },

    updateForm: {
        _id: null,
        title: '',
        content: ''
    },

    getPosts: async () => {
        // get all posts
        const res = await axios.get('/posts');
        // set to state
        set({ posts: res.data.posts })
    },

    createFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value
                }
            }
        })
    },

    createPost: async (e) => {
        // prevent page refresh on form submission
        e.preventDefault();
        // post to database
        const { createForm, posts } = postsStore.getState()
        const res = await axios.post("/posts", createForm);
        console.log(res)
        // update state
        set({
            posts: [...posts, res.data.post],
            createForm: { title: "", content: "" }
        });
    },

    deletePost: async (_id) => {
        // delete the post

        await axios.delete(`/posts/${_id}`)
        const { posts } = postsStore.getState();
        // update state
        const newPosts = posts.filter((post) => {
            return post._id !== _id;
        });
        set({ posts: newPosts })
    },

    updateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value
                }
            }
        })
    },

    updatePostForm: ({ _id, title, content }) => {
        // get current values of the post from state
        set({ updateForm: { _id, title, content } })
    },

    updatePost: async (e) => {
        e.preventDefault();
        const { updateForm: {_id, title, content}, posts } = postsStore.getState();

        // Send the update request with axios
        const res = await axios.put(`/posts/${_id}`, { title, content });

        // find index of post
        const newPosts = [...posts];
        const postIndex = posts.findIndex((post) => {
            return post._id === _id;
        })
        newPosts[postIndex] = res.data.post;
        // update state on page
        set({
            posts: newPosts,
            updateForm: { _id: null, title: "", content: "" }
        })
    }
}));

export default postsStore;