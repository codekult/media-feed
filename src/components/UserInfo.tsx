import { User } from "firebase/auth";
import { Box, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export interface UserInfoProps {
  user: User | null;
  onSignOut: () => {};
}

export default function UserInfo({ user, onSignOut }: UserInfoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <AccountCircleIcon />
        <Typography>{user?.email}</Typography>
      </Box>
      <Button variant="outlined" size="small" onClick={onSignOut}>
        Logout
      </Button>
    </Box>
  );
}
