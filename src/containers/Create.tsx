import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import randomWords from "random-words";
import {
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { NewPostFormSchema, NewPostFormData } from "src/schema/forms";
import { useAuth } from "src/hooks/useAuth";
import { useMediaPreview } from "src/hooks/useMediaPreview";
import { usePosts } from "src/hooks/usePosts";
import Modal from "src/components/Modal";
import ImageDropZone from "src/components/ImageDropZone";
import Media from "src/components/Media";
import PostImageButton from "src/components/PostImageButton";

export default function Create() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mediaPreview, setMediaPreview } = useMediaPreview();
  const { createPost } = usePosts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPostFormData>({
    resolver: zodResolver(NewPostFormSchema),
  });

  function onSubmit(data: NewPostFormData) {
    createPost({
      createdAt: Date.now(),
      file: mediaPreview,
      likesByUserId: { [user!.uid]: false },
      likesCount: 0,
      ...data,
    });
    navigate("/");
  }

  function onDrop(files: any) {
    const file = files[0];
    setMediaPreview(file);
  }

  return (
    <Modal>
      <Dialog
        open={true}
        onClose={() => {
          navigate("/");
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloudUploadIcon />
          New post
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <ImageDropZone
                onDrop={onDrop}
                sx={{ height: "100%", cursor: "pointer" }}
              >
                {mediaPreview ? (
                  <Media
                    src={URL.createObjectURL(mediaPreview)}
                    shouldRevokeObjectURL
                  />
                ) : (
                  <PostImageButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      height: "100%",
                    }}
                  />
                )}
              </ImageDropZone>
            </Grid>
            <Grid item xs={7}>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  multiline
                  autoFocus
                  defaultValue={randomWords({ min: 0, max: 25, join: " " })}
                  placeholder="Enter post text"
                  rows={5}
                  error={!!errors.text}
                  helperText={errors.text && "Please enter some text"}
                  inputProps={register("text", { required: true })}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!mediaPreview}
                  sx={{ width: "50%" }}
                >
                  Post
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Modal>
  );
}
