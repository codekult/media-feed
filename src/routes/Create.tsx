import PrivateRoute from "src/containers/PrivateRoute";
import CreateContainer from "src/containers/Create";

function Create() {
  return (
    <PrivateRoute>
      <CreateContainer />
    </PrivateRoute>
  );
}

export default Create;
