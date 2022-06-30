import { Box, FormControlLabel, Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface LikeButtonProps {
  onClick: () => void;
  isChecked: boolean;
}

export default function LikeButton({ onClick, isChecked }: LikeButtonProps) {
  return (
    <Box
      sx={{
        pl: 1.5,
        backgroundColor: "white",
        opacity: 0.5,
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
            checked={!!isChecked}
            onChange={onClick}
          />
        }
        label="Like"
      />
    </Box>
  );
}
