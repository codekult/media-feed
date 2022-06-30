import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Container, CircularProgress } from "@mui/material";

import { useAuth } from "src/hooks/useAuth";

export default function PrivateRoute({ children }: PropsWithChildren<{}>) {
  let { user, isAuthReady } = useAuth();

  if (!isAuthReady)
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
