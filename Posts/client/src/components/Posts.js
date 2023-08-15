import postsStore from "../stores/postsStore";
import Post from "./Post";

export default function Posts() {
    const store = postsStore();
    return (
        <div>
            <h1>Post your ideas</h1>
            {store.posts && store.posts.map(post => {
                return <Post post={post} key={post._id} />
            })}
        </div>
    )
}