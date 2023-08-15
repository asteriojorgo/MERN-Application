import { useEffect } from "react";
import postsStore from "../stores/postsStore";
import Posts from "../components/Posts";
import CreateForm from "../components/CreateForm";
import UpdateForm from "../components/UpdateForm";
import "../components/style.css"



export default function HomePage() {

    const store = postsStore();

    // useEffect
    useEffect(() => {
        store.getPosts();
    }, []);


    return (
        <div>
            <Posts />
            <div className="forms">
                <CreateForm />
                <UpdateForm />
            </div>
        </div>
    )
}
