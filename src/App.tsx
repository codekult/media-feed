import { Routes, Route } from "react-router-dom";

import Login from "src/routes/Login";
import Register from "src/routes/Register";
import Feed from "src/routes/Feed";
import Create from "src/routes/Create";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Feed />}>
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
