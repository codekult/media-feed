import { useNavigate, Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import { useAuth } from "src/hooks/useAuth";
import { useMediaPreview } from "src/hooks/useMediaPreview";
import { usePosts } from "src/hooks/usePosts";
import ImageDropZone from "src/components/ImageDropZone";
import UserInfo from "src/components/UserInfo";
import SearchBar from "src/components/SearchBar";
import PostImageButton from "src/components/PostImageButton";
import PostCard from "src/components/PostCard";
import NoPostsMessage from "src/components/NoPostsMessage";

export default function Feed() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { setMediaPreview } = useMediaPreview();
  const { posts, toggleLike } = usePosts();

  function onDrop(files: any) {
    const file = files[0];
    setMediaPreview(file);
    navigate("/create");
  }

  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2} columnSpacing={8}>
        <Grid item xs={12} sm={6} md={8}>
          <ImageDropZone onDrop={onDrop} sx={{ height: "100%" }}>
            <PostImageButton fullWidth size="large" sx={{ height: "100%" }} />
          </ImageDropZone>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserInfo user={user} onSignOut={signOut} />
          <SearchBar />
        </Grid>

        {!!user && !!posts.length ? (
          posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard
                post={post}
                userId={user.uid}
                onToggleLike={() => toggleLike(user.uid, post)}
              />
            </Grid>
          ))
        ) : (
          <NoPostsMessage />
        )}
      </Grid>
      <Outlet />
    </Container>
  );
}
