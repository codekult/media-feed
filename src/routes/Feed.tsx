import FeedContainer from "src/containers/Feed";
import PrivateRoute from "src/components/PrivateRoute";

function Feed() {
  return (
    <PrivateRoute>
      <FeedContainer />
    </PrivateRoute>
  );
}

export default Feed;
