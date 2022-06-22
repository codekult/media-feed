// import { useNavigate, useLocation } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

function Register() {
  // let navigate = useNavigate();
  // let location = useLocation();

  // let from = location.state?.from?.pathname || "/";

  // navigate(from, { replace: true });

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Paper
        component="form"
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          padding: "2em",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">Create Account</Typography>

        <TextField fullWidth variant="outlined" type="text" label="Username" />
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Password"
        />
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Confirm password"
        />

        <Button variant="contained">Sign up</Button>
      </Paper>
    </Container>
  );
}

export default Register;
