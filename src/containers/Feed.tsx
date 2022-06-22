import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div>
      Feed
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Feed;
