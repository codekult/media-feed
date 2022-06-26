import { useNavigate, Link } from "react-router-dom";
import { User } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

import { LoginFormSchema, LoginFormData } from "src/schema/forms";
import { useAuth } from "src/hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const { signInWithEmail, signInWithFacebook, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function onSubmit(data: LoginFormData) {
    try {
      await signInWithEmail(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function loginWithProvider(signInWithProvider: () => Promise<User>) {
    try {
      await signInWithProvider();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
        onSubmit={handleSubmit(onSubmit)}
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

        <TextField
          fullWidth
          type="text"
          label="Email"
          error={!!errors.email}
          helperText={errors.email && "Please enter your email/username"}
          inputProps={register("email", { required: true })}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password && "Please enter your password"}
          inputProps={register("password")}
        />

        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox defaultChecked inputProps={register("rememberMe")} />
            }
            label="Remember me"
          />
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FacebookIcon />}
          onClick={() => loginWithProvider(signInWithFacebook)}
          sx={{
            color: "#fff",
            backgroundColor: "#3b5998",
          }}
        >
          Sign in with Facebook
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GoogleIcon />}
          onClick={() => loginWithProvider(signInWithGoogle)}
          sx={{ color: "#fff", backgroundColor: "#4285F4" }}
        >
          Sign in with google
        </Button>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="secondary">
            Sign up
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}

export default Login;
