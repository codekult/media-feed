import PrivateRoute from "src/containers/PrivateRoute";
import CreateContainer from "src/containers/Create";

export default function Create() {
  return (
    <PrivateRoute>
      <CreateContainer />
    </PrivateRoute>
  );
}
