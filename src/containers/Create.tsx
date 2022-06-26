import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Modal from "src/components/Modal";

function Create() {
  const navigate = useNavigate();

  return (
    <Modal>
      <Dialog
        open={true}
        onClose={() => {
          navigate("/");
        }}
      >
        <DialogTitle>New post</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>Media preview</Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField multiline />
              <Button variant="contained">Post</Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Modal>
  );
}

export default Create;
