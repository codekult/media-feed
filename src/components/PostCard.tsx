import { User } from "firebase/auth";
import { formatDistance } from "date-fns";
import { Box, Typography } from "@mui/material";

import { Post } from "src/schema/entities";
import Media from "src/components/Media";
import LikeButton from "src/components/LikeButton";

export interface PostCardProps {
  post: Post;
  userId: User["uid"];
  onToggleLike: () => void;
}

export default function PostCard({
  post,
  userId,
  onToggleLike,
}: PostCardProps) {
  const { createdAt, mediaUrl, text, likesByUserId, likesCount } = post;

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Media src={mediaUrl} />
        <Box sx={{ position: "absolute", bottom: 8, right: 1 }}>
          <LikeButton
            onClick={onToggleLike}
            isChecked={likesByUserId[userId]}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption">
          {formatDistance(createdAt, Date.now(), { addSuffix: true })}
        </Typography>
        <Typography variant="caption">{`${likesCount} ${
          likesCount === 1 ? "like" : "likes"
        }`}</Typography>
      </Box>
      <Typography sx={{ pt: 1, px: 0.5, pb: 6 }}>{text}</Typography>
    </>
  );
}
