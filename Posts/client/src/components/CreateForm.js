import postsStore from "../stores/postsStore";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateForm() {

    const store = postsStore();
    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={store.createPost} className="create">
            <div>
                <input
                    className="form-control-lg"
                    onChange={store.createFormField}
                    value={store.createForm.title}
                    name="title"
                    placeholder="title"
                    required // This attribute makes the input required
                />
                </div>
                <div>
                <textarea
                    className="form-control-lg"
                    onChange={store.createFormField}
                    value={store.createForm.content}
                    name="content"
                    placeholder="content"
                    required // This attribute makes the textarea required
                />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
