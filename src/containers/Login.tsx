// import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
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
        <Typography variant="body1">Login</Typography>

        <TextField fullWidth variant="outlined" type="text" label="Username" />
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Password"
        />

        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Button variant="contained">Sign in</Button>
        </Box>
        <Button variant="contained" startIcon={<FacebookIcon />}>
          Sign in with Facebook
        </Button>
        <Button variant="contained" startIcon={<GoogleIcon />}>
          Sign in with google
        </Button>
        <Link to="/register">
          <Button color="secondary">Sign up</Button>
        </Link>
      </Paper>
    </Container>
  );
}

export default Login;
