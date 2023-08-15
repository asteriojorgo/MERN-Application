import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "./style.css"
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";

function App() {


  // // Commented Code
  // const [posts, setPosts] = useState(null);
  // const [createForm, setCreateForm] = useState({
  //   title: '',
  //   content: ''
  // })

  // const [updateForm, setUpdateForm] = useState({
  //   _id: null,
  //   title: '',
  //   content: ''
  // })



  // // functions
  // const getPosts = async () => {
  //   const res = await axios.get('http://localhost:4000/posts');

  //   setPosts(res.data.posts);
  // };

  // const createFormField = (e) => {
  //   const { name, value } = e.target;
  //   setCreateForm(prevCreateForm => ({
  //     ...prevCreateForm,
  //     [name]: value
  //   }));
  // };

  // const updateFormField = (e) => {
  //   const { name, value } = e.target;
  //   setUpdateForm(prevUpdateForm => ({
  //     ...prevUpdateForm,
  //     [name]: value
  //   }));
  // };

  // const createPost = async (e) => {
  //   // prevent page refresh on form submission
  //   e.preventDefault();
  //   // post to database
  //   const res = await axios.post("http://localhost:4000/posts", createForm);
  //   console.log(res)
  //   // update state
  //   setPosts([...posts, res.data.post])

  //   // clear form
  //   setCreateForm({ title: "", content: "" })
  // };

  // const deletePost = async (_id) => {
  //   // delete the post

  //   const res = await axios.delete(`http://localhost:4000/posts/${_id}`)

  //   console.log(res)

  //   // update state
  //   const newPosts = [...posts].filter((post) => {
  //     return post._id !== _id;
  //   })
  //   setPosts(newPosts);
  // };

  // const updatePostForm = (post) => {
  //   // get current values of the post from state
  //   console.log(post)
  //   setUpdateForm({ _id: post._id, title: post.title, content: post.content })
  // };

  // const updatePost = async (e) => {
  //   e.preventDefault();
  //   const { title, content } = updateForm;

  //   // Send the update request with axios
  //   const res = await axios.put(`http://localhost:4000/posts/${updateForm._id}`, { title, content });

  //   // find index of post
  //   const newPosts = [...posts];
  //   const postIndex = posts.findIndex((post) => {
  //     return post._id === updateForm._id;
  //   })
  //   newPosts[postIndex] = res.data.post;
  //   // update state on page
  //   setPosts(newPosts);

  //   // Clear the update form
  //   setUpdateForm({ _id: null, title: "", content: "" });
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Create Account</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route index element={<RequireAuth><HomePage /></RequireAuth>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

