import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import HideImageIcon from "@mui/icons-material/HideImage";

export default function NoPostsMessage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignitems: "center",
        gap: 2,
        textAlign: "center",
        width: "100%",
        pt: 12,
      }}
    >
      <Box>
        <HideImageIcon sx={{ color: "secondary.light" }} />
      </Box>
      <Typography variant="h5">No posts yet</Typography>
      <Link to="/create">
        <Typography variant="h4">Be the first!</Typography>
      </Link>
    </Box>
  );
}
