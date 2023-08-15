import postsStore from "../stores/postsStore";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UpdateForm() {

    const store = postsStore();
    return (
        <div>
            <h3>Update Post</h3>
            <form onSubmit={store.updatePost} className="update">
                <div>
                    <input
                        className="form-control-lg"
                        onChange={store.updateFormField}
                        value={store.updateForm.title}
                        name="title"
                        placeholder="title"
                        required
                    />
                </div>
                <div>
                    <textarea
                        className="form-control-lg"
                        onChange={store.updateFormField}
                        value={store.updateForm.content}
                        name="content"
                        placeholder="content"
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
