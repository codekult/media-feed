import PrivateRoute from "src/containers/PrivateRoute";
import FeedContainer from "src/containers/Feed";

export default function Feed() {
  return (
    <PrivateRoute>
      <FeedContainer />
    </PrivateRoute>
  );
}
