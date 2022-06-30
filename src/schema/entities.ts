export type Post = {
  id: string;
  mediaUrl: string;
  createdAt: number;
  text: string;
  likesByUserId: { [key: string]: boolean };
  likesCount: number;
};
