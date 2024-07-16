import axios from "axios";
import { useContext, useEffect } from "react";
import {
  PostContext,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
} from "../context/postContext";
import "../componets/Post.css";

const Post = () => {
  const {
    blog: { posts },
    dispatch,
  } = useContext(PostContext);

  const fetchPosts = async () => {
    dispatch({
      type: FETCH_POSTS_REQUEST,
    });
    try {
      const res = await axios.get("http://localhost:3000/users");
      let data = res.data;
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = () => {
    dispatch({ type: ADD_POST });
  };

  const handleEditPost = (postId) => {
    dispatch({ type: EDIT_POST, payload: postId });
  };

  const handleDeletePost = (postId) => {
    dispatch({ type: DELETE_POST, payload: postId });
  };

  let list = posts.map((el) => (
    <tr key={el.id}>
      <td className="td">{el.name}</td>
      <td className="td">{el.username}</td>
      <td className="td">
        <button className="Edit" onClick={() => handleEditPost(el.id)}>
          Edit
        </button>
        <button className="Delete" onClick={() => handleDeletePost(el.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="All">
      <div className="container">
        <div className="all">
          <div className="start">
            <h1>Student Up</h1>
            <button onClick={handleAddPost}>Add</button>
          </div>
          <table className="tableALLL">
            <thead>
              <tr>
                <th className="th">FIRST NAME</th>
                <th className="th">LAST NAME</th>
                <th className="th">ACTIONS</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Post;
