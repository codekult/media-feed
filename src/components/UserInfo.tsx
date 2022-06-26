import { User } from "firebase/auth";

import { Box, Typography, Button } from "@mui/material";

interface UserInfoProps {
  user: User | null;
  onSignOut: () => {};
}

function UserInfo({ user, onSignOut }: UserInfoProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography>{user?.email}</Typography>
      <Button onClick={onSignOut}>Logout</Button>
    </Box>
  );
}

export default UserInfo;
