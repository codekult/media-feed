import PrivateRoute from "src/containers/PrivateRoute";
import FeedContainer from "src/containers/Feed";

function Feed() {
  return (
    <PrivateRoute>
      <FeedContainer />
    </PrivateRoute>
  );
}

export default Feed;
