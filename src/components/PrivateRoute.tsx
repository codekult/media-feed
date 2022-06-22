import { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";

import useAuth from "src/hooks/useAuth";

function PrivateRoute({ children }: PropsWithChildren<{}>) {
  let { user } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
