import Post from "./componets/Post";
import { PostProvider } from "./context/postContext";
const App = () => {
  return (
    <div>
      <PostProvider>
        <Post />
      </PostProvider>
    </div>
  );
};

export default App;
