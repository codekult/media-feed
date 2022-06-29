import { Button, ButtonProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PostImageButton({ ...ButtonProps }: ButtonProps) {
  return (
    <Button
      variant="contained"
      component="span"
      startIcon={<AddIcon />}
      {...ButtonProps}
    >
      Drag image here to post it
    </Button>
  );
}
