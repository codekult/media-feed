import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

import { RegisterFormSchema, RegisterFormData } from "src/schema/forms";
import { useAuth } from "src/hooks/useAuth";

function Register() {
  const navigate = useNavigate();

  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  async function onSubmit(data: RegisterFormData) {
    try {
      await registerUser(data);
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
        <Typography variant="body1">Create Account</Typography>

        <TextField
          fullWidth
          variant="outlined"
          type="email"
          label="Email"
          error={!!errors.email}
          helperText={errors.email && "Please enter your email/username"}
          inputProps={register("email", { required: true })}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password && "Please enter your password"}
          inputProps={register("password")}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Confirm password"
          error={!!errors.passwordConfirmation}
          helperText={
            errors.passwordConfirmation && "Please confirm your password"
          }
          inputProps={register("passwordConfirmation")}
        />

        <Button type="submit" variant="contained">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}

export default Register;
