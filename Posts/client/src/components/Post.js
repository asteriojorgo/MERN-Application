import postsStore from "../stores/postsStore";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post({ post }) {

    const store = postsStore((store) => {
        return { deletePost: store.deletePost, updatePostForm: store.updatePostForm }
    });
    return (
        <div className="center" key={post._id}>
            <h4 className="posts">{post.title}</h4>
            <p className="posts">{post.content}</p>
            <button className="btn btn-outline-primary" onClick={() => { store.deletePost(post._id) }}>Delete Post</button>
            <button className="btn btn-outline-primary" onClick={() => { store.updatePostForm(post) }}>Update Post</button>
        </div>
    );
}