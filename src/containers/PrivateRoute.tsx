import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "src/hooks/useAuth";

export default function PrivateRoute({ children }: PropsWithChildren<{}>) {
  let { user, isAuthReady } = useAuth();

  if (!isAuthReady) return <>...Loading</>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
