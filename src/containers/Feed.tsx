import { Container, Grid, Box } from "@mui/material";

import { useAuth } from "src/hooks/useAuth";
import UserInfo from "src/components/UserInfo";

function Feed() {
  let { user, signOut } = useAuth();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ backgroundColor: "yellow" }}>
          MediaUploader
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "orange" }}>
          <UserInfo user={user} onSignOut={signOut} />
          SearchBar
        </Grid>

        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "lime" }}>
          Media
        </Grid>
      </Grid>
    </Container>
  );
}

export default Feed;
